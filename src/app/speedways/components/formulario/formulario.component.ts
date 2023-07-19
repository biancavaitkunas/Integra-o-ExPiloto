import { Component, EventEmitter, OnInit } from '@angular/core';
import { Speedway } from '../../models/speedways';
import { SpeedwayServiceService } from '../../services/speedway-service.service';
import { Country } from 'src/app/countries/models/country';
import { CountryServiceService } from 'src/app/countries/services/country-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventSpeedway = new EventEmitter();
  //public emitEventCountry = new EventEmitter();

  public speedways!: Speedway[];
  public countries!: Country[];
  public countrySelected!: number;

  public speedway = {} as Speedway

  constructor(private service: SpeedwayServiceService, private countryService: CountryServiceService){}
  
  public getSpeedways(){
    this.service.getSpeedways().subscribe((data) => {this.speedways = data});
  }

  public getSpeedwayByName(){
    this.service.getSpeedwaysByName(this.speedway.name).subscribe((data) => {this.speedways = data});
    
  }

  public insert(){

    //this.speedway.country.id == this.countrySelected;
    this.service.insert(this.speedway).subscribe((data) => {console.log(data)})
    if(this.speedway.id){
      this.speedway == this.speedway;
    }
  }

  ngOnInit(): void {
    this.service.emitEventSpeedway.subscribe((data) => {this.speedway = data});
    this.countryService.getCountries().subscribe((data) => {this.countries = data})
  }

}
