package com.skilldistillery.citieslived.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.citieslived.entities.City;
import com.skilldistillery.citieslived.repositories.CityRepository;

@Service
public class CityServiceImpl implements CityService {

	@Autowired
	private CityRepository cityRepo;
	
	@Override
	public List<City> allCities() {
		return cityRepo.findAll();
	}
	
	@Override
	public City findById(int id) {
		Optional<City> cityOpt = cityRepo.findById(id);
		if (cityOpt.isPresent()) {
			return cityOpt.get();
		}
		return null;
	}

	@Override
	public List<City> findByName(String name) {
		name = "%" + name + "%";
		return cityRepo.findByNameLike(name);
	}

	@Override
	public List<City> findByAddressOrState(String keyword) {
		keyword = "%" + keyword + "%";
		return cityRepo.findByAddressLikeOrStateLike(keyword, keyword);
	}

	@Override
	public City createCity(City city) {
		cityRepo.saveAndFlush(city);
		return city;
	}

	@Override
	public City updateCity(City city) {
		cityRepo.saveAndFlush(city);
		return city;
	}

	@Override
	public boolean deleteCity(int cityId) {
		cityRepo.deleteById(cityId);
		return !cityRepo.existsById(cityId);
	}


}
