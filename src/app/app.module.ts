import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/signup/sign-up.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { DataStorageService } from './shared/data-storage.service';
import { MaterialModule } from './shared/material.module';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SigninComponent,
    PostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
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
