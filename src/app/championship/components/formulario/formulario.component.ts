import { Component, EventEmitter, OnInit } from '@angular/core';
import { Championship } from '../../models/championship';
import { ChampionshipServiceService } from '../../services/championship-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventChampionship = new EventEmitter();

  public championships!: Championship[];

  public championship = {} as Championship

  constructor(private service: ChampionshipServiceService){}
  
  public getChampionships(){
    this.service.getChampionships().subscribe((data) => {this.championships = data});
  }

  public getChampionshipByName(){
    this.service.getChampionshipByName(this.championship.description).subscribe((data) => {this.championships = data});
    
  }

  public insert(){
    this.service.insert(this.championship).subscribe((data) => {console.log(data)})
    if(this.championship.id){
      this.championship == this.championship;
    }
  }

  public getChampionshipByYearBetween(inicialYear: number, finalYear: number){
    this.service.getChampionshipsByYearBetween(inicialYear, finalYear).subscribe((data) => {this.championships = data})
  }

  public getChampionshipByYear(){
    this.service.getChampionshipsByYear(this.championship.year).subscribe((data) => {this.championships = data})
  }

  ngOnInit(): void {
    this.service.emitEventChampionship.subscribe((data) => {this.championship = data})
  }

}
