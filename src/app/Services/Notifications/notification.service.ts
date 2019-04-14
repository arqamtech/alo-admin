import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notiRef = this.db.list(`Admin Data/Notifications`);

  constructor(
    private db: AngularFireDatabase,
  ) { }

  getReadNotis() {
    return this.db.list(`Admin Data/Notifications`, ref => ref.orderByChild('Status').equalTo("Read")).snapshotChanges();
  }
  getUnreadNotis() {
    return this.db.list(`Admin Data/Notifications`, ref => ref.orderByChild('Status').equalTo("Unread")).snapshotChanges();
  }

  markRead(n) {
    this.db.list(`Admin Data/Notifications/${n.key}`).set("Status", "Read");
  }
}
