import { Component, OnInit } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-sub-cat-items',
  templateUrl: './add-sub-cat-items.component.html',
  styleUrls: ['./add-sub-cat-items.component.scss'],
})
export class AddSubCatItemsComponent implements OnInit {

  addSpinner: boolean = false;
  subCat = this.navParams.get("subCat");

  constructor(
    public modalCtrl: ModalController,
    private catService: CateoriesService,
    private navParams: NavParams,
  ) { }

  ngOnInit() { }



  addSubCatItem() {
    if (this.catService.cat.valid) {
      let tempCat = this.catService.cat.value;
      this.addSpinner = true;
      this.catService.addSubCatItem(tempCat, this.subCat).then(() => {
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
