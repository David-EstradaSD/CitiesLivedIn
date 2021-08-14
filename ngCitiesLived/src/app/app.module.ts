import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesService } from './services/cities.service';
import { CityListComponent } from './components/city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent
  ],
  imports: [ // this is for modules
    BrowserModule,
    AppRoutingModule,
    FormsModule, // this is for 2 way data binds, etc
    HttpClientModule

  ],
  providers: [ // this is for services and pipes (these are the dependency injectors in constructors)
    CitiesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
