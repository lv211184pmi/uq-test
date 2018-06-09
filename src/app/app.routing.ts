import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
    { path: 'posts', children: [
      { path: '', component: PostsComponent },
      { path: ':id', component: SinglePostComponent }
    ] },
    { path: 'register', component: RegistrationComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
