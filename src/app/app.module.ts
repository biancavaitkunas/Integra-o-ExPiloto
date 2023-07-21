import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menus/components/menu/menu.component';
import { MenusModule } from './menus/menus.module';
import { CountriesModule } from './countries/countries.module';
import { TeamsComponent } from './teams/components/teams/teams.component';
import { TeamsModule } from './teams/teams.module';
import { ChampionshipModule } from './championship/championship.module';
import { SpeedwayModule } from './speedways/speedway.module';
import { RacesModule } from './races/races.module';
import { PilotsModule } from './pilots/pilots.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    UsersModule,
    HomeModule,
    HttpClientModule,
    MenusModule,
    CountriesModule,
    TeamsModule,
    ChampionshipModule,
    SpeedwayModule,
    RacesModule,
    PilotsModule,
    LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
