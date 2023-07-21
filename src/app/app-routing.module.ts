import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './home/home-pages/home-pages.component';
import { UserComponent } from './users/components/user/user.component';
import { CountriesComponent } from './countries/components/countries/countries.component';
import { TeamsComponent } from './teams/components/teams/teams.component';
import { ChampionshipComponent } from './championship/components/championship/championship.component';
import { SpeedwaysComponent } from './speedways/components/speedways/speedways.component';
import { PilotsComponent } from './pilots/components/pilots/pilots.component';
import { RacesComponent } from './races/components/races/races.component';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {path:"", component: HomePagesComponent},
  {path:"login", component: LoginComponent},
  {path:"users", component: UserComponent},
  {path:"countries", component: CountriesComponent},
  {path:"teams", component: TeamsComponent},
  {path:"championships", component: ChampionshipComponent},
  {path:"speedways", component: SpeedwaysComponent},
  {path:"pilots", component: PilotsComponent},
  {path:"races", component: RacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
