import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/Users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  userId;
  user;
  constructor(
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
    private userSer: UsersService,
  ) { }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.getProduct();
  }



  getProduct() {
    this.userSer.getUser(this.userId).subscribe(snap => {
      this.user = snap.payload.val();
      this.user.key = snap.key;
    });
  }

}
