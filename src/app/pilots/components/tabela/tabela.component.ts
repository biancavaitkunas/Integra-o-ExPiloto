import { Component, OnInit } from '@angular/core';
import { PilotServiceService } from '../../services/pilot-service.service';
import { Pilot } from '../../models/pilots';
import { CountryServiceService } from 'src/app/countries/services/country-service.service';
import { ServiceService } from 'src/app/teams/services/service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: PilotServiceService, private countryService: CountryServiceService, private teamService: ServiceService){}

  public pilots!: Pilot[]

  public deletePilot(event: Pilot){
    this.service.deletePilot(event).subscribe(() => this.service.getPilots().subscribe((data) => this.pilots = data));
  }

  public editPilot(pilot: Pilot){
    //pilot.country == this.countryService.countriesList.find(selectedCountry => selectedCountry == pilot.country);
    this.service.editPilot(pilot);
  }

  ngOnInit(): void {
    this.service.getPilots().subscribe((data) => {this.pilots = data})
  }



}
