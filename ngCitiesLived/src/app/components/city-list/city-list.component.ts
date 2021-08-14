import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities : City[] | any = []; // must initialize empty array for our service.ts array
  selected : City | null = null;
  selectedAddCity : City | null = null;
  newCity : City = new City();
  editCity : City | null = null; // have to set this editCity to null initially

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

  getCityCount() : number {
    return this.cities.length;
  }

  displayAddCityForm(city : City) : void {
    this.selectedAddCity = city;
  }

  displayCity(city : City) : void {
    this.selected = city; // setting the "selected" to the city we click on (SEE city-list html)
  }

  displayTable() : void {
    this.selected = null; // we call this function in our Details View to go "Back"
    this.selectedAddCity = null;
  }

  addCity() : void {
    this.cityService.create(this.newCity).subscribe(
      data => {
        this.loadCities();
      }, error => {
          console.error('CityListComponent.addCity(): error adding city');
          throwError(error);
      }
    );
    this.newCity = new City();
    this.displayTable();
  }

  setEditCity() : void {
    this.editCity = Object.assign({}, this.selected);
    // this is so that we can give editCity a value
    // in our Details form, when "Edit" button is clicked, we call this function, setting
  }

  updateCity(city : City) {
    this.cityService.update(city).subscribe(
      data => {
        this.loadCities();
      }, error => {
        console.error('CityListComponent.udpateCity(): error updating city');
        throwError(error);
      }
    );
    this.editCity = null; // this is for resetting the page so it stays here
    this.selected = null; // "oh ur done editing, ok let's go back"
  }

  deleteCity(id : number) {
    this.cityService.destroy(id).subscribe(
      data => {
        this.loadCities();
      }, error => {
        console.error('CityListComponent.deleteCity(): error deleting city ' + id);
        throwError(error);
      }
    );
    this.displayTable();
  }



}
