import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../shared/models/user.model';
import { MaterialModule } from '../shared/material.module';
// import { AlertService, UserService } from '../_services/index';
import { UserService } from '../shared/services/user.service';


@Component({
  moduleId: module.id.toString(),
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  model: any;
  loading = false;

  UsersCollection: AngularFirestoreCollection<User>;
  UsersList$: Observable<User[]>;

  constructor(
    private router: Router,
    private userService: UserService,
    private db: AngularFirestore
    // private alertService: AlertService
  ) {
    this.model = {};
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
    this.UsersCollection = this.db.collection<User>('users');
    this.UsersCollection.add({
      username: this.model.username,
      password: this.model.password,
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      posts: [],
      id: this.model.id
    });
  }
}
