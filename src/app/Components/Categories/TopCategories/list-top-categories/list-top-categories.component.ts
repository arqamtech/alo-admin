import { Component, OnInit } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { Observable } from 'rxjs';
import { NavController, ModalController } from '@ionic/angular';
import { AddTopCategoriesComponent } from '../add-top-categories/add-top-categories.component';

@Component({
  selector: 'app-list-top-categories',
  templateUrl: './list-top-categories.component.html',
  styleUrls: ['./list-top-categories.component.scss'],
})
export class ListTopCategoriesComponent implements OnInit {

  cats: Observable<any>;
  showSpinner: boolean = true;

  constructor(
    private catSer: CateoriesService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.cats = this.catSer.getTopCats();
    this.cats.subscribe(() => this.showSpinner = false);
  }


  gtSubCat(key) {
    this.navCtrl.navigateForward(`sub-categories/${key}`)
  }

  async gtAddTopCat() {
    const modal = await this.modalCtrl.create({
      component: AddTopCategoriesComponent,
      backdropDismiss: false,
    });
    return await modal.present();
  }
  async delTopCat(cat) {
    this.catSer.confirmDelTopCat(cat);
  }
}
