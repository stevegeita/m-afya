import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  

  constructor() { }

  ngOnInit() { }

  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }
}

