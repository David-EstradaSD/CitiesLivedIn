import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // 2 of 2 rxjs imports
import { catchError } from 'rxjs/operators'; // 1 of 2 rxjs imports
import { City } from '../models/city';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities : City[] = [];
  // private baseUrl = 'http://localhost:8084/'; // we use environment.ts.baseUrl for our
  private uriPath = 'api/cities';
  private url = environment.baseUrl + this.uriPath;

  constructor(
    private http : HttpClient
  ) { }

  public index() : Observable<City[]> {
    return this.http.get<City[]>(this.url).pipe(
      catchError((err : any) => {
        console.error(err);
        return throwError('Error getting City List');
      })
    );
  }

  public showById(cityId : any) : Observable<City> {
    return this.http.get<City>(this.url + "/" + cityId, this.getHttpOptions()).pipe(
      catchError((err : any) => {
        console.error('CitiesService.show(): error getting city id ' + cityId);
        return throwError(err);
      })
    );
  }

  public create(city : City) {
    return this.http.post<City>(this.url, city, this.getHttpOptions()).pipe(
      catchError((err : any) => {
        console.error('CitiesService.create(): error creating city');
        return throwError(err);
      })
    );
  }

  public update(city : City) {
    return this.http.put<City>(this.url, city, this.getHttpOptions()).pipe(
      catchError((err : any) => {
        console.error('CitiesService.update(): error updating city id ' + city.id);
        return throwError(err);
      })
    );
  }

  public destroy(id : number) {
    return this.http.delete<City>(this.url + '/' + id, this.getHttpOptions()).pipe(
      catchError((err : any) => {
        console.error('CitiesService.destroy(): error deleting city id' + id);
        return throwError(err);
      })
    );
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest',
      }),
    };
    return httpOptions;
  }




}
