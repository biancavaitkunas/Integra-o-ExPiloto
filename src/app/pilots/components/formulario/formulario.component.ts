import { Component, EventEmitter, OnInit } from '@angular/core';
import { Pilot } from '../../models/pilots';
import { Team } from 'src/app/teams/models/teams';
import { Country } from 'src/app/countries/models/country';
import { PilotServiceService } from '../../services/pilot-service.service';
import { CountryServiceService } from 'src/app/countries/services/country-service.service';
import { ServiceService } from 'src/app/teams/services/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventPilot = new EventEmitter();

  public pilots!: Pilot[];
  public countries!: Country[];
  public teams!: Team[];

  public pilot = {} as Pilot
  public selectedCountry!: Pilot;
  public selectedTeam!: Team;

  constructor(private service: PilotServiceService, private countryService: CountryServiceService, private teamService: ServiceService) { }

  public getPilots() {
    this.service.getPilots().subscribe((data) => { this.pilots = data });
  }

  public getPilotByName() {
    this.service.getPilotByName(this.pilot.name).subscribe((data) => { this.pilots = data });
  }

  public getPilotByCountry() {
    this.service.getPilotByCountry(this.pilot.country).subscribe((data) => { this.pilots = data });
  }

  public getPilotByTeam() {
    this.service.getPilotByTeam(this.pilot.team).subscribe((data) => { this.pilots = data });
  }

  public findCountry() {
    this.countries.forEach(country => {
      if (this.selectedCountry == country) {
        this.selectedCountry == country
      }
    });
  }

  public findTeam() {
    this.teams.forEach(team => {
      if (this.selectedTeam == team) {
        this.selectedTeam == team
      }
    });
  }

  public insert() {
    this.findCountry();
    this.findTeam();

    this.service.insert(this.pilot).subscribe((data) => { console.log(data) })
  }

  ngOnInit(): void {
    this.service.emitEventPilot.subscribe((data) => { this.pilot = data });
    this.countryService.getCountries().subscribe((data) => { this.countries = data });
    this.teamService.getTeams().subscribe((data) => { this.teams = data })
  }

}
