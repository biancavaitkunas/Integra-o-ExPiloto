import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TabelaComponent,
    FormularioComponent,
    PilotsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    PilotsComponent
  ]
})
export class PilotsModule { }
