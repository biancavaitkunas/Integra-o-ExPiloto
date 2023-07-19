import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SpeedwaysComponent } from './components/speedways/speedways.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TabelaComponent,
    FormularioComponent,
    SpeedwaysComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[SpeedwaysComponent]
})
export class SpeedwayModule { }
