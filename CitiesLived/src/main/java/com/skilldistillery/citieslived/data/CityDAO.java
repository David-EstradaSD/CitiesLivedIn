package com.skilldistillery.citieslived.data;

import java.util.List;

import com.skilldistillery.citieslived.entities.City;

public interface CityDAO {
	
	List<City> showAll();
	
	City findById(int id);
	
	City createCityLived(City city);

}
