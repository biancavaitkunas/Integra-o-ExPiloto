import { Component, OnInit } from '@angular/core';
import { ChampionshipServiceService } from '../../services/championship-service.service';
import { Championship } from '../../models/championship';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: ChampionshipServiceService){}

  public championships!: Championship[]

  public deleteChampionship(event: Championship){
    this.service.deleteChampionship(event).subscribe(() => this.service.getChampionships().subscribe((data) => this.championships = data));
  }

  public editChampionship(championship: Championship){
    this.service.editChampionship(championship);
  }

  ngOnInit(): void {
    this.service.getChampionships().subscribe((data) => {this.championships = data})
  }


}
