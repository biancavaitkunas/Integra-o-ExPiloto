import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: CountryServiceService){}

  public countries!: Country[]

  public deleteCountry(event: Country){
    this.service.deleteCountry(event).subscribe(() => this.service.getCountries().subscribe((data) => this.countries = data));
  }

  public editCountry(country: Country){
    this.service.editCountry(country);
  }

  ngOnInit(): void {
    this.service.getCountries().subscribe((data) => {this.countries = data})
  }

}
