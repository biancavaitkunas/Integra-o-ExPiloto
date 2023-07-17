import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './home/home-pages/home-pages.component';
import { UserComponent } from './users/components/user/user.component';

const routes: Routes = [
  {path:"", component: HomePagesComponent},
  {path:"users", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
