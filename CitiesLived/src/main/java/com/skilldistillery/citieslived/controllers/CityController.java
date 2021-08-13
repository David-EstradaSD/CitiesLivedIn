package com.skilldistillery.citieslived.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.citieslived.entities.City;
import com.skilldistillery.citieslived.repositories.CityRepository;
import com.skilldistillery.citieslived.services.CityService;

@RestController
@RequestMapping("api")
public class CityController {
	
	@Autowired
	private CityService cityService;
	
	@Autowired
	CityRepository cityRepo;
	
	@GetMapping("cities")
	public List<City> showAll() {
		return cityService.allCities();
	}
	
	@GetMapping("cities/{id}")
	public City showById(@PathVariable int id, HttpServletResponse res) {
		City city = cityService.findById(id);
		if (city == null) {
			res.setStatus(404); // Not Found
		}
		return city;
	}
	
	@GetMapping("cities/search/city/{name}")
	public List<City> searchByName(@PathVariable String name, HttpServletResponse res) {
		List<City> cities = cityService.findByName(name);
		if (cities == null) {
			res.setStatus(404); // Not Found
		}
		return cities;
	}
	
	@GetMapping("cities/search/{keyword}")
	public List<City> keywordSearchForAddressAndState(@PathVariable String keyword, HttpServletResponse res) {
		List<City> cities = cityService.findByAddressOrState(keyword);
		if (cities == null) {
			res.setStatus(404); // Not Found
		}
		return cities;
	}
	
	@PostMapping("cities")
	public City createCity(@RequestBody City city, HttpServletResponse res, HttpServletRequest req) {
		city = cityService.createCity(city);
		try {
			if (city == null) {
				res.setStatus(404);
			} else {
				res.setStatus(201); // Created
				StringBuffer url = req.getRequestURL();
				url.append("/").append(city.getId());
				res.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			res.setStatus(400); // Bad Request
			city = null;
		}
		return city;
	}
	
	@PutMapping("cities")
	public City updateCity(@RequestBody City city, HttpServletResponse res) {
		try {
			city = cityService.updateCity(city);
		} catch (Exception e) {
			res.setStatus(400); // Bad Request
			city = null;
		}
		if (city == null) {
			res.setStatus(404); // Not Found
		}
		return city;
	}
	
	@DeleteMapping("cities/{id}")
	public void deleteCity(City city, @PathVariable int id, HttpServletResponse res) {
		try {
			boolean deleted = cityService.deleteCity(id);
			if (deleted) {
				res.setStatus(204); // No Content
			} else {
				res.setStatus(404); // Not Found
			}
		} catch (Exception e) {
			res.setStatus(400); // Bad Request
		}
	}
	
}
