import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';
import { LoginServiceService } from 'src/app/login/service/login-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {

  constructor(private service: UserServiceService, private loginService: LoginServiceService) {}

  public users!: User[];
  public token: string = 'Bearer ';

  public deleteUser(event: User) {
    this.service
      .deleteUser(event)
      .subscribe(() =>
        this.service.getUsers().subscribe((data) => (this.users = data))
      );
  }

  public editUser(user: User) {
    this.service.editUser(user);
  }

  ngOnInit(): void {
    this.loginService.getToken('bianca@gmail', 'bianca123').subscribe(()=> {this.service.getUsers().subscribe((data) => {
      this.token += data});
    });
    /*this.service.getUsers().subscribe((data) => {
      this.users = data;
    });*/
  }
}
