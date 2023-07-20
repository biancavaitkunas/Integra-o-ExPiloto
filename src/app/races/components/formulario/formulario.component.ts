import { Component, EventEmitter, OnInit } from '@angular/core';
import { Race } from '../../models/races';
import { Speedway } from 'src/app/speedways/models/speedways';
import { Championship } from 'src/app/championship/models/championship';
import { SpeedwayServiceService } from 'src/app/speedways/services/speedway-service.service';
import { RaceServiceService } from '../../services/race-service.service';
import { ChampionshipServiceService } from 'src/app/championship/services/championship-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventSpeedway = new EventEmitter();

  public races!: Race[];
  public speedways!: Speedway[];
  public championships!: Championship[];

  public race = {} as Race
  public selectedSpeedway!: Speedway;
  public selectedChampionship!: Championship;

  constructor(private service: RaceServiceService, 
    private speedwayService: SpeedwayServiceService, 
    private championshipService: ChampionshipServiceService) { }

  public getRaces() {
    this.service.getRaces().subscribe((data) => { this.races = data });
  }

  /*public getRacesByName() {
    this.service.getRacesByName(this.speedway.name).subscribe((data) => { this.speedways = data });

  }*/

  public findSpeedway() {
    this.speedways.forEach(speedway => {
      if (this.selectedSpeedway == speedway) {
        this.selectedSpeedway == speedway
      }
    });
  }

  public findChampionship() {
    this.championships.forEach(championship => {
      if (this.selectedChampionship == championship) {
        this.selectedChampionship == championship
      }
    });
  }

  public insert() {
    this.findChampionship();
    this.findSpeedway();
    this.service.insert(this.race).subscribe((data) => { console.log(data) })
    if (this.race.id) {
      this.race === this.race;
    }

  }

  ngOnInit(): void {
    this.service.emitEventRace.subscribe((data) => { this.race = data });
    this.speedwayService.getSpeedways().subscribe((data) => { this.speedways = data });
    this.championshipService.getChampionships().subscribe((data) => { this.championships = data })
  }

}
