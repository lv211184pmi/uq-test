import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: any;
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
