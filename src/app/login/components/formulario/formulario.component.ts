import { Component } from '@angular/core';
import { UserLogin } from '../../model/userLogin';
import { LoginServiceService } from '../../service/login-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  public userLogin = { } as UserLogin;

  constructor(private loginService: LoginServiceService){}

  public login(){
    this.loginService.getToken(this.userLogin.email, this.userLogin.password).subscribe((data) => {console.log("Fez login "+ data)});
  }

}
