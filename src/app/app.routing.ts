import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [

    { path: 'posts', children: [
      { path: '', component: PostsComponent },
      { path: ':id', component: SinglePostComponent }
    ], canActivate: [AuthGuard] },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: 'posts' }
];

export const routing = RouterModule.forRoot(appRoutes);
