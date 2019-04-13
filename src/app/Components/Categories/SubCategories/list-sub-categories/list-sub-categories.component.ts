import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-list-sub-categories',
  templateUrl: './list-sub-categories.component.html',
  styleUrls: ['./list-sub-categories.component.scss'],
})
export class ListSubCategoriesComponent implements OnInit {

  catKey;

  subCats: Array<any> = [];
  cat;
  constructor(
    public navCtrl: NavController,
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.catKey = params['id'];
    });
    this.getSubCats();
    this.getCat();
  }

  getCat() {
    this.db.object(`Categories/${this.catKey}`).snapshotChanges().subscribe(snap => {
      this.cat = snap.payload.val();
    })
  }

  getSubCats() {
    this.db.list(`SubCatsIndex/${this.catKey}`).snapshotChanges().subscribe(snap => {
      this.subCats = [];
      snap.forEach(snip => {

        this.db.object(`SubCategories/${snip.key}`).snapshotChanges().subscribe((ssnip) => {
          var temp: any = ssnip.payload.val();
          temp.key = ssnip.key;
          this.subCats.push(temp);
        })

      })
    })

  }






  gtSubCatI(key) {
    this.navCtrl.navigateForward(`items-sub-categories/${key}`)
  }
}
