import { Component, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Output() public emitEventUser = new EventEmitter();

  //public users!: User[];
  public users: any= {}

  public user = {} as User

  constructor(private service: UserServiceService){}

  public submitUser(name: string, email: string, password: string, roles: string){

    if(name && email && password && roles){
      this.service.submitUser(name, email, password, roles);
      this.limpaUser();
    }
  }

  public limpaUser(){
    this.users = {}
  }

  public getUser(){
    this.service.getUsers().subscribe((data) => {
      console.log(data);
      
    });
  }

  public getUserByName(){
    this.service.getUserByName(this.user.name).subscribe((data) => {
      console.log(data);
    });
  }

}
