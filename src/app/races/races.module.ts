import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { RacesComponent } from './components/races/races.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent,
    RacesComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    RacesComponent
  ]
})
export class RacesModule { }
