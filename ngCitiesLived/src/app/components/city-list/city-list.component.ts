import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities : City[] | any = [];
  selected : City | null = null;

  constructor(
    private cityService : CitiesService
  ) { }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    this.cityService.index().subscribe(
      cities => {
        this.cities = cities;
      },
      error => {
        console.error('CityListComponent.loadCities(): error getting cities list');
        console.error(error);
      }
    );
  }



}
