import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from '../idea.service';
import { ToastController, IonicModule } from '@ionic/angular';

  
@Component({
  selector: 'app-hosidetails',
  templateUrl: './hosidetails.page.html',
  styleUrls: ['./hosidetails.page.scss'],
})
export class HosidetailsPage implements OnInit {

   idea: Idea = {
    name: '',
    address: '',
    aon: '',
    uap: '',
    dental: '',
    surgery: '',
    opentime: '',
    closetime: '',
  };
  id= null;
 
  constructor(private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { 
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
  }
 
  ionViewWillEnter() {
    IonicModule.forRoot({ swipeBackEnabled: true })
    if (this.id) {
      this.ideaService.getIdea(this.id).subscribe(idea => {
        this.idea = idea;
      });
    }
  }
 
  
}
 

