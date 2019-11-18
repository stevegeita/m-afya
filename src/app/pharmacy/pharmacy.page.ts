import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { IdeaService, Idea } from '../idea.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pharmacy',
  templateUrl: 'pharmacy.page.html',
  styleUrls: ['pharmacy.page.scss']
})
export class PharmacyPage {
  chemists: any;
  private chems: Observable<Idea[]>;
  public chemlist: any[];
  public loadedchemlist: any[];
  
 
  constructor(private ideaService: IdeaService,private firestore: AngularFirestore, public navCtrl: NavController) { }
 
  ngOnInit() {
      this.chems = this.ideaService.getChems();
      this.firestore.collection('chemist').valueChanges().subscribe(chemlist =>{
        this.chemlist= chemlist;
        this.loadedchemlist= chemlist;
      });
     }
     initializeItems(): void {
      this.chemlist = this.loadedchemlist;
    }
    filterList(event) {
      this.initializeItems();
      let searchTerm = event.target.value.toLowerCase();
      console.log(searchTerm)
      if (!searchTerm) {
        return;
      }
    
      this.chemlist = this.chemlist.filter(currentchemist => {
        if (currentchemist.Name && searchTerm) {
          if (currentchemist.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            console.log(currentchemist.Name);
            return true;
          }
          return false;
        }
      });
    }
    }