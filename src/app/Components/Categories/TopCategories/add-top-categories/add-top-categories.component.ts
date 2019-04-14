import { Component, OnInit } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-top-categories',
  templateUrl: './add-top-categories.component.html',
  styleUrls: ['./add-top-categories.component.scss'],
})
export class AddTopCategoriesComponent implements OnInit {

  addSpinner: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    private catService: CateoriesService,
  ) { }

  ngOnInit() { }



  addCat() {
    if (this.catService.cat.valid) {
      let tempCat = this.catService.cat.value;
      this.addSpinner = true;
      this.catService.addTopCat(tempCat).then(() => {
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
