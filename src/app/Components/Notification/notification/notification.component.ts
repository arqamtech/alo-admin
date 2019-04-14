import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/Notifications/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  readNotis: Observable<any>;
  unreadNotis: Observable<any>;
  showSpinner: boolean = true;

  constructor(
    private notiService: NotificationService,
  ) { }

  ngOnInit() {
    this.unreadNotis = this.notiService.getUnreadNotis();
    this.readNotis = this.notiService.getReadNotis();
    this.readNotis.subscribe(() => this.showSpinner = false);
  }
  maRead(n) {
    this.notiService.markRead(n);
  }
}
