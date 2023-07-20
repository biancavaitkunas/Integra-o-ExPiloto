import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  constructor(private service: UserServiceService) {}

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
    /*this.service.getToken('usuario@gmail.com', 'senha').subscribe((data) => {
      this.token += data;
      console.log(data);
    });*/
    this.service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
