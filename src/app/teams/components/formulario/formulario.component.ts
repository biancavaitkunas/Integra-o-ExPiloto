import { Component, EventEmitter, OnInit } from '@angular/core';
import { Team } from '../../models/teams';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventCountry = new EventEmitter();

  public teams!: Team[];

  public team = {} as Team

  constructor(private service: ServiceService){}
  
  public getTeam(){
    this.service.getTeams().subscribe((data) => {this.teams = data});
  }

  public getTeamByName(){
    this.service.getTeamByName(this.team.name).subscribe((data) => {this.teams = data});
    
  }

  public insert(){
    this.service.insert(this.team).subscribe((data) => {console.log(data)})
    if(this.team.id){
      this.team == this.team;
    }
  }

  ngOnInit(): void {
    this.service.emitEventCountry.subscribe((data) => {this.team = data})
  }


}
