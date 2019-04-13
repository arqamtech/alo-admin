import { Component, OnInit } from '@angular/core';
import { CateoriesService } from 'src/app/Services/Categories/cateories.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-top-categories',
  templateUrl: './list-top-categories.component.html',
  styleUrls: ['./list-top-categories.component.scss'],
})
export class ListTopCategoriesComponent implements OnInit {

  cats: Observable<any> = this.catSer.getTopCats();

  constructor(
    private catSer: CateoriesService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtSubCat(key) {
    this.navCtrl.navigateForward(`sub-categories/${key}`)
  }
}
