import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { MaterialModule } from './shared/material.module';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './shared/services/user.service';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/services/authentication.servise';
import { AuthGuard } from './shared/auth.guard';
import { BackendAPI } from './backend/api';
import { JwtInterceptor } from './backend/jwt';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SinglePostComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    routing
  ],
  providers: [
    PostsService,
    UserService,
    AuthGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    BackendAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
