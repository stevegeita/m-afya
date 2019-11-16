import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
 

  read_Hospitals() {
    return this.firestore.collection('hospital').snapshotChanges();
  } 
  read_Chemists() {
    return this.firestore.collection('chemist').snapshotChanges();
  }
  read_Hosi() {
    return this.firestore.doc('hospital/').snapshotChanges();
  }

}