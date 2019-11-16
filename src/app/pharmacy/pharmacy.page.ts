import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: 'pharmacy.page.html',
  styleUrls: ['pharmacy.page.scss']
})
export class PharmacyPage {
  chemists: any;
  
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {
    this.crudService.read_Chemists().subscribe(data => {
 
      this.chemists = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.chemists);
 
    });
  }
}