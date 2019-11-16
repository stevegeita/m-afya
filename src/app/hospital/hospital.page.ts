import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { IdeaService, Idea} from '../idea.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hospital',
  templateUrl: 'hospital.page.html',
  styleUrls: ['hospital.page.scss']
})
export class HospitalPage {

private ideas: Observable<Idea[]>;
public hosilist: any[];
public loadedhosilist: any[];
 
constructor(private ideaService: IdeaService,private firestore: AngularFirestore, public navCtrl: NavController) { }
 ngOnInit() {
  this.ideas = this.ideaService.getIdeas();
  this.firestore.collection('hospital').valueChanges().subscribe(hosilist =>{
    this.hosilist= hosilist;
    this.loadedhosilist= hosilist;
  });
 }
 initializeItems(): void {
  this.hosilist = this.loadedhosilist;
}
filterList(evt) {
  this.initializeItems();

  const searchTerm = evt.srcElement.value;

  if (!searchTerm) {
    return;
  }

  this.hosilist = this.hosilist.filter(currenthospital => {
    if (currenthospital.Name && searchTerm) {
      if (currenthospital.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
        console.log(currenthospital.Name);
        return true;
      }
      return false;
    }
  });
}
}