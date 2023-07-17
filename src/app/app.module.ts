import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menus/components/menu/menu.component';
import { MenusModule } from './menus/menus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, HomeModule, HttpClientModule, MenusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
