import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotiPopComponent } from '../../Notification/noti-pop/noti-pop.component';
import { NotificationService } from 'src/app/Services/Notifications/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  unReadNum;

  constructor(
    private popoverCtrl: PopoverController,
    private notiService: NotificationService,
  ) { }

  ngOnInit() {
    this.getNotiNum();
  }

  getNotiNum() {
    this.notiService.getNotificationNum().subscribe(res => (this.unReadNum = res.length));
  }

  async gtNoti(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotiPopComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
