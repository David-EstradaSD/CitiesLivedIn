package com.skilldistillery.citieslived.services;

import java.util.List;

import com.skilldistillery.citieslived.entities.City;

public interface CityService {

	City findById(int id);
	
	List<City> allCities();
	
	List<City> findByName(String name);
	
	List<City> findByAddressOrState(String keyword);
	
	City createCity(City city);
	
	City updateCity(City city);
	
	boolean deleteCity(int cityId);
	
	
	
}
