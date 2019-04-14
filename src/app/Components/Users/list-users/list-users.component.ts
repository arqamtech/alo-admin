import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Users/users.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: Observable<any>;
  showSpinner: boolean = true;

  constructor(
    private userService: UsersService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.users.subscribe(() => this.showSpinner = false);
  }


  gtUserDetails(u) {
    this.navCtrl.navigateForward(`user/${u.key}`)
  }
}
