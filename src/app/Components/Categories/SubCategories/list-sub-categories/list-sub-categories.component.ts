import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddSubCategoriesComponent } from '../add-sub-categories/add-sub-categories.component';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';


@Component({
  selector: 'app-list-sub-categories',
  templateUrl: './list-sub-categories.component.html',
  styleUrls: ['./list-sub-categories.component.scss'],
})
export class ListSubCategoriesComponent implements OnInit {

  catKey;
  showSpinner: boolean = false;

  subCats: Array<any> = [];
  cat;
  constructor(
    public navCtrl: NavController,
    private router: ActivatedRoute,
    public db: AngularFireDatabase,
    public modalCtrl: ModalController,
    private catService: CateoriesService,
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
      this.cat.key = snap.key;
    })
  }

  getSubCats() {
    this.showSpinner = true;
    this.db.list(`SubCatsIndex/${this.catKey}`).snapshotChanges().subscribe(snap => {
      this.subCats = [];
      snap.forEach(snip => {
        this.db.object(`SubCategories/${snip.key}`).snapshotChanges().subscribe((ssnip) => {
          var temp: any = ssnip.payload.val();
          temp.key = ssnip.key;
          this.subCats.push(temp);
        })
        this.showSpinner = false;
      })
    })

  }


  delSubCat(subCatKey) {
    this.catService.confirmDelSubCat(subCatKey, this.cat.key);
  }

  async gtAddSubCat() {
    const modal = await this.modalCtrl.create({
      component: AddSubCategoriesComponent,
      componentProps: { cat: this.cat },
      backdropDismiss: false,
    });
    return await modal.present();
  }

  gtSubCatI(key) {
    this.navCtrl.navigateForward(`items-sub-categories/${key}`)
  }
}
