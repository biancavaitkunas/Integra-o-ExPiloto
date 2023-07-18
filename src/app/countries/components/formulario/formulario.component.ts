import { Component, EventEmitter, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventCountry = new EventEmitter();

  public countries!: Country[];

  public country = {} as Country

  constructor(private service: CountryServiceService){}
  
  public getUser(){
    this.service.getCountries().subscribe((data) => {this.countries = data});
  }

  public getCountryByName(){
    this.service.getCountryByName(this.country.name).subscribe((data) => {this.countries = data});
    
  }

  public insert(){
    this.service.insert(this.country).subscribe((data) => {console.log(data)})
    if(this.country.id){
      this.country == this.country;
    }
  }

  ngOnInit(): void {
    this.service.emitEventCountry.subscribe((data) => {this.country = data})
  }


}
