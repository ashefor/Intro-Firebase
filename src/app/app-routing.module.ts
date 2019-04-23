import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'new' , component: NewpostComponent},
  {path: 'articles', component: ArticlesComponent},
  // {path: 'account/signin', component:LoginComponent},
  // {path: 'account/signup', component:SignupComponent},
  {path: "**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routercomponents = [LoginComponent, 
  HomeComponent, 
  SignupComponent, 
  PagenotfoundComponent, 
  AboutComponent, 
  NewpostComponent, 
  ArticlesComponent]
