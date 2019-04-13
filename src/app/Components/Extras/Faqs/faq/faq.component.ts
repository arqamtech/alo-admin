import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtUsers() {
    this.navCtrl.navigateForward("faq-users")
  }

  gtVendors() {
    this.navCtrl.navigateForward("faq-vendors")
  }
}
