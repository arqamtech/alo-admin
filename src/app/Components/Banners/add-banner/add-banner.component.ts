import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/Services/Banners/banners.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss'],
})
export class AddBannerComponent implements OnInit {

  img1: any;
  img2: any;

  constructor(
    private bannerSer: BannersService,
  ) { }

  ngOnInit() { }

  async addBanner() {
    let tempBanner = this.bannerSer.banner.value;
    tempBanner.Image = this.img2;
    if (this.bannerSer.banner.valid) {
      this.bannerSer.addBanner(tempBanner);
    } else {
      this.bannerSer.presentToast("Enter a name for Image");
    }
  }


  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.img2 = file;
  }
  removeImage() {
    this.img1 = null;
  }

}
