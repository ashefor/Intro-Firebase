import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routercomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './account/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoaderServiceService } from './services/loader-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AboutComponent } from './about/about.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    routercomponents,
    SignupComponent,
    PagenotfoundComponent,
    LoaderComponent,
    AboutComponent,
    NewpostComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [LoaderServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
