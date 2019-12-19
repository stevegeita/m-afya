import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apa',
  templateUrl: './apa.page.html',
  styleUrls: ['./apa.page.scss'],
})
export class ApaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    IonicModule.forRoot({ swipeBackEnabled: true })
  }
  

}
