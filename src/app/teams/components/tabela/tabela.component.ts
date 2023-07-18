import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Team } from '../../models/teams';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: ServiceService){}

  public teams!: Team[]

  public deleteTeam(event: Team){
    this.service.deleteTeam(event).subscribe(() => this.service.getTeams().subscribe((data) => this.teams = data));
  }

  public editTeam(country: Team){
    this.service.editTeam(country);
  }

  ngOnInit(): void {
    this.service.getTeams().subscribe((data) => {this.teams = data})
  }

}
