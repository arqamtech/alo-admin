import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddSubCatItemsComponent } from '../add-sub-cat-items/add-sub-cat-items.component';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';


@Component({
  selector: 'app-list-sub-cat-items',
  templateUrl: './list-sub-cat-items.component.html',
  styleUrls: ['./list-sub-cat-items.component.scss'],
})
export class ListSubCatItemsComponent implements OnInit {
  subCatKey;
  subCat;
  subCatItems: Array<any> = [];
  showSpinner: boolean = false;

  constructor(
    public navCtrl: NavController,
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
    public modalCtrl: ModalController,
    private catService: CateoriesService,
  ) { }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.subCatKey = params['id'];
    });
    this.getSubCat();
    this.getSubCatItems();
  }


  getSubCat() {
    this.db.object(`SubCategories/${this.subCatKey}`).snapshotChanges().subscribe((ssnip) => {
      this.subCat = ssnip.payload.val();
      this.subCat.key = ssnip.key;
    })

  }
  getSubCatItems() {
    this.showSpinner = true;

    this.db.list(`SubCatsItemsIndex/${this.subCatKey}`).snapshotChanges().subscribe(snap => {
      this.subCatItems = [];
      snap.forEach(snip => {
        this.db.object(`SubCategoriesItems/${snip.key}`).snapshotChanges().subscribe((ssnip => {
          var temp: any = ssnip.payload.val();
          temp.key = ssnip.key;
          this.subCatItems.push(temp);
        }))
        this.showSpinner = false;
      })
    })
  }
  async gtAddSubCatItem() {
    const modal = await this.modalCtrl.create({
      component: AddSubCatItemsComponent,
      componentProps: { subCat: this.subCat },
      backdropDismiss: false,
    });
    return await modal.present();
  }
  async delSubCatItem(scItemKey) {
    this.catService.confirmDelSubCatItem(scItemKey, this.subCat.key)
  }
}
