package com.skilldistillery.citieslived.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.citieslived.entities.City;

public interface CityRepository extends JpaRepository<City, Integer> {
	
	List<City> findByNameLike(String name);
	
	List<City> findByAddressLikeOrStateLike(String keyword1, String keyword2);
	
}
