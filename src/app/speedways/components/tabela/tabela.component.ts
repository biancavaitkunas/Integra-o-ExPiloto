import { Component, OnInit } from '@angular/core';
import { SpeedwayServiceService } from '../../services/speedway-service.service';
import { Speedway } from '../../models/speedways';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit{

  constructor(private service: SpeedwayServiceService){}

  public speedways!: Speedway[]

  public deleteSpeedway(event: Speedway){
    this.service.deleteSpeedway(event).subscribe(() => this.service.getSpeedways().subscribe((data) => this.speedways = data));
  }

  public editSpeedway(speedway: Speedway){
    this.service.editSpeedway(speedway);
  }

  ngOnInit(): void {
    this.service.getSpeedways().subscribe((data) => {this.speedways = data})
  }


}
