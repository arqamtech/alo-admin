import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/Notifications/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noti-pop',
  templateUrl: './noti-pop.component.html',
  styleUrls: ['./noti-pop.component.scss'],
})
export class NotiPopComponent implements OnInit {

  notis: Observable<any>;
  showSpinner: boolean = true;
  notisLength;
  constructor(
    private notiService: NotificationService,
  ) { }

  ngOnInit() {
    this.notis = this.notiService.getUnreadNotis();
    this.notis.subscribe(res => (this.notisLength = res.length))
    this.notis.subscribe(() => this.showSpinner = false);
  }
  gtNotis() {

  }
}
