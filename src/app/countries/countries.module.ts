import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CountriesComponent]
})
export class CountriesModule { }
