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
export class FormularioComponent implements OnInit {

  public emitEventSpeedway = new EventEmitter();

  public speedways!: Speedway[];
  public countries!: Country[];

  public speedway = {} as Speedway
  public selectedCountry!: Country;

  public inicialSize!: number;
  public finalSize!: number;

  constructor(private service: SpeedwayServiceService, private countryService: CountryServiceService) { }

  public getSpeedways() {
    this.service.getSpeedways().subscribe((data) => { this.speedways = data });
  }

  public getSpeedwayByName() {
    this.service.getSpeedwaysByName(this.speedway.name).subscribe((data) => { this.speedways = data });
  }

  public getSpeedwaysBySizeBetween() {
    this.service.getSpeedwaysBySizeBetween(this.inicialSize, this.finalSize).subscribe((data) => { this.speedways = data });
  }

  public getSpeedwaysBySize() {
    this.service.getSpeedwaysBySize(this.speedway.size).subscribe((data) => { this.speedways = data });
  }

  public findCountry() {
    this.countries.forEach(country => {
      if (this.selectedCountry == country) {
        this.selectedCountry == country
      }
    });
  }

  public insert() {
    this.findCountry();
    this.service.insert(this.speedway).subscribe((data) => { console.log(data) })
    if (this.speedway.id) {
      this.speedway === this.speedway;
    }

  }

  ngOnInit(): void {
    this.service.emitEventSpeedway.subscribe((data) => { this.speedway = data });
    this.countryService.getCountries().subscribe((data) => { this.countries = data })
  }

}
