import { Component, OnInit } from '@angular/core';
import { Dev, DatabaseProvider } from '../provider/database.service';
import { NavController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  accounts: Observable<any[]>;
  account = {};

  constructor( public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) { }

  ngOnInit() {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy){
        this.databaseprovider.getacc().subscribe(any =>{
         this.account= any; 

        })
      }
     //this.accounts= this.databaseprovider.loadAccount();
     });
     
   }
}
