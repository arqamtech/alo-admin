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

  users: Observable<any> = this.userService.getUsers();

  constructor(
    private userService: UsersService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtUserDetails(u) {
    this.navCtrl.navigateForward(`user/${u.key}`)

  }
}
