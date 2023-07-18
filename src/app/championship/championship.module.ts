import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { ChampionshipComponent } from './components/championship/championship.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent,
    ChampionshipComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ChampionshipComponent]
})
export class ChampionshipModule { }
