package com.skilldistillery.citieslived.controllers;

import java.util.List;

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
	
	@GetMapping("cities{id}")
	public City showById(@PathVariable int id) {
		return cityService.findById(id);
	}
	
	@GetMapping("cities/search/{name}")
	public List<City> searchByName(@PathVariable String name) {
		return cityService.findByName(name);
	}
	
	@GetMapping("cities/search/{keyword}")
	public List<City> keywordSearchForAddressAndState(@PathVariable String keyword) {
		return cityService.findByAddressOrState(keyword);
	}
	
	@PostMapping("cities")
	public City createCity(@RequestBody City city) {
		return cityService.createCity(city);
	}
	
	@PutMapping("cities")
	public City updateCity(@RequestBody City city) {
		return cityService.updateCity(city);
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
