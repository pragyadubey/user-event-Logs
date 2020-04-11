import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouteAuthService } from './services/route-auth.service';


const routes: Routes = [
  {path: '', redirectTo: '/default-page', pathMatch: 'full'},
   {path: 'default-page', component: DefaultPageComponent},
   {path: 'login', component: LoginComponent},
   {path: 'home', component: HomeComponent, canActivate: [RouteAuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
