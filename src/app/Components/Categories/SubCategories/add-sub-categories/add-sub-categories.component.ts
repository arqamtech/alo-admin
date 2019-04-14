import { Component, OnInit } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-sub-categories',
  templateUrl: './add-sub-categories.component.html',
  styleUrls: ['./add-sub-categories.component.scss'],
})
export class AddSubCategoriesComponent implements OnInit {

  addSpinner: boolean = false;
  cat = this.navParams.get("cat");
  constructor(
    public modalCtrl: ModalController,
    private catService: CateoriesService,
    private navParams: NavParams,
  ) {}

  ngOnInit() { }


  addSubCat() {
    if (this.catService.cat.valid) {
      let tempCat = this.catService.cat.value;
      this.addSpinner = true;
      this.catService.addSubCat(tempCat, this.cat).then(() => {
        this.catService.cat.reset();
      }).then(() => {
        this.addSpinner = false;
        this.modalCtrl.dismiss();
      });
    }
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
