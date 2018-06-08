import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { SignUpComponent } from './auth/signup/sign-up.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: 'posts', children: [
      { path: '', component: PostsComponent },
      // Add as lazy.
      { path: ':id', component: SinglePostComponent }
    ] },
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SigninComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
