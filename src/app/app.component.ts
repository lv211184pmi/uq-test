import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfGPUIVIVDIq5DgDXOVljNyYQtDDfLVug',
      authDomain: 'upquodeposts.firebaseapp.com'
    });
  }
}
