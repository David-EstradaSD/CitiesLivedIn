package com.skilldistillery.citieslived.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.citieslived.entities.City;

public interface CityRepository extends JpaRepository<City, Integer> {
	
	City findByName(String name);
	

}
