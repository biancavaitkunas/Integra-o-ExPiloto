import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FormularioComponent]
})
export class LoginModule { }
