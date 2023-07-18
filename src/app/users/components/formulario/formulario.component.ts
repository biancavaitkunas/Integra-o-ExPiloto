import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  public emitEventUser = new EventEmitter();

  public users!: User[];
  //public users: any= {}

  public user = {} as User

  constructor(private service: UserServiceService){}
  
  public getUser(){
    this.service.getUsers().subscribe((data) => {this.users = data});
  }

  public getUserByName(){
    this.service.getUserByName(this.user.name).subscribe((data) => {this.users = data});
    
  }

  public insert(){
    this.service.insert(this.user).subscribe((data) => {console.log(data)})
    if(this.user.id){
      this.user == this.user;
    }
  }

  ngOnInit(): void {
    this.service.emitEventUser.subscribe((data) => {this.user = data})
  }

  

}
