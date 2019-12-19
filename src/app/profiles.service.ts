import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  public userProfile: firebase.firestore.DocumentReference;
public currentUser: firebase.User;

constructor() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.currentUser = user;
      this.userProfile = firebase.firestore().doc(`/users/${user.uid}`);
    }
  }); 
 }
 getUserProfile(): firebase.firestore.DocumentReference {
  return this.userProfile;
}
}
