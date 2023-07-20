import { Component, OnInit } from '@angular/core';
import { RaceServiceService } from '../../services/race-service.service';
import { Race } from '../../models/races';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: RaceServiceService){}

  public races!: Race[]

  public deleteRace(event: Race){
    this.service.deleteRace(event).subscribe(() => this.service.getRaces().subscribe((data) => this.races = data));
  }

  public editRace(speedway: Race){
    this.service.editRace(speedway);
  }

  ngOnInit(): void {
    this.service.getRaces().subscribe((data) => {this.races = data})
  }



}
