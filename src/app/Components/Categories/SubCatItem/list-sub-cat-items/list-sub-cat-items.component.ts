import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-list-sub-cat-items',
  templateUrl: './list-sub-cat-items.component.html',
  styleUrls: ['./list-sub-cat-items.component.scss'],
})
export class ListSubCatItemsComponent implements OnInit {
  subCatKey;
  subCat;
  subCatItems: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
  ) { }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.subCatKey = params['id'];
    });
    this.getSubCat();
    this.getSubCatItems();
  }


  getSubCat() {
    this.db.object(`SubCategories/${this.subCatKey.key}`).snapshotChanges().subscribe((ssnip) => {
      this.subCat = ssnip.payload.val();
    })

  }
  getSubCatItems() {
    this.db.list(`SubCatsItemsIndex/${this.subCatKey}`).snapshotChanges().subscribe(snap => {
      this.subCatItems = [];
      snap.forEach(snip => {
        this.db.object(`SubCategoriesItems/${snip.key}`).snapshotChanges().subscribe((ssnip => {
          var temp: any = ssnip.payload.val();
          temp.key = ssnip.key;
          this.subCatItems.push(temp);
        }))
      })
    })
  }


}
