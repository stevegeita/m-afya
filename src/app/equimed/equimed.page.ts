import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-equimed',
  templateUrl: './equimed.page.html',
  styleUrls: ['./equimed.page.scss'],
})
export class EquimedPage implements OnInit {

  constructor() { }

  ngOnInit() {
    IonicModule.forRoot({ swipeBackEnabled: true })
  }

}
