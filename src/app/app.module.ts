import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/signup/sign-up.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { DataStorageService } from './shared/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SigninComponent,
    PostsComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    AuthService, 
    PostsService, 
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
