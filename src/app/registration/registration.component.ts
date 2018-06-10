import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


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
  model: any = {};
  loading = false;
  
  userName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  constructor(
    private router: Router,
    private userService: UserService,
    // private alertService: AlertService
  ) {}

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }
}
