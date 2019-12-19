import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea, Steve } from '../idea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chemdetails',
  templateUrl: './chemdetails.page.html',
  styleUrls: ['./chemdetails.page.scss'],
})
export class ChemdetailsPage implements OnInit {
  id= null;
  chem: Steve = {
    name: '',
    address: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
}

ionViewWillEnter() {
  if (this.id) {
    this.ideaService.getchem(this.id).subscribe(chem => {
      this.chem = chem;
    });
  }
}


}
