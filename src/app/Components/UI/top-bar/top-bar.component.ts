import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotiPopComponent } from '../../Notification/noti-pop/noti-pop.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() { }



  async gtNoti(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotiPopComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
