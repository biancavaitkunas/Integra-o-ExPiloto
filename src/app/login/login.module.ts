import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FormularioComponent]
})
export class LoginModule { }
