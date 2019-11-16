import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map';
import { BehaviorSubject, Observable } from 'rxjs';
//import { Storage } from '@ionic/storage';
//import { HttpClient } from 'selenium-webdriver/http';
 
export interface Dev {
  name: string,
  location: string,
  // pname: string,
  // plocation:string,
}
export interface Acc{
  fname: string,
  lname:string,
  age: string,
  insurance:string,
  contact: string,
  contact2: string,
  bloodgroup: string,
  allergies: string,
  drugs: string,
  chronic:string
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseProvider {
  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  hospitals= new BehaviorSubject([]);
  accounts= new BehaviorSubject([]);
  pharmacies= new BehaviorSubject([]);
 
  constructor(private sqlitePorter: SQLitePorter, private sqlite: SQLite, private platform: Platform, private http: HttpClient) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'hospital.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/hospital.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadAccount();
          this.getAllHospitals();
          this.getAllPharmacies();
          this.databaseReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
  getDevs(): Observable<Dev[]>{
    return this.hospitals.asObservable();
  }

  getPhm():  Observable<Dev[]>{
    return this.pharmacies.asObservable();
  }
  getacc(): Observable<Acc[]>{
    return this.accounts.asObservable();
  }
 
  addHospital(name, location) {
    let data = [name, location]
    return this.database.executeSql("INSERT INTO hospital (hospname, location) VALUES (?, ?)", data).then(data => {
    this.getAllHospitals();
    });
  }
  getAllHospitals() {
    return this.database.executeSql("SELECT * FROM hospital", []).then(data => {
      let hospitals = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          hospitals.push({
             name: data.rows.item(i).hospname,
              location: data.rows.item(i).location});
             }
        }
        return hospitals;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAllPharmacies() {
    return this.database.executeSql("SELECT * FROM pharmacies", []).then((data) => {
      let pharmacies = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          pharmacies.push({name: data.rows.item(i).phmname, location: data.rows.item(i).location });
        }
      }
      return pharmacies;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 

  // getProducts(): Observable<any[]> {
  //   return this.hospitals.asObservable();
  // }
  loadAccount(){
    return this.database.executeSql('SELECT * FROM account', []).then(data => {
      let accounts = [];

      if (data.rows.length >0 ){
        for (var i=0; i<data.rows.length; i++){
          accounts.push({
            fname: data.rows.item(i).fname,
            lname: data.rows.item(i).lname,
            age: data.rows.item(i).age,
            insurance: data.rows.item(i).insurance,
            contact: data.rows.item(i).contact,
            contact2: data.rows.item(i).contact2,
            bloodgroup: data.rows.item(i).bloodgroup,
            allergies: data.rows.item(i).allergies,
            drugs: data.rows.item(i).drugs,
            chronic: data.rows.item(i).chronic
            })
         }
       }
      return accounts;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
}