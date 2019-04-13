import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/Services/Faqs/faq.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-faq',
  templateUrl: './vendor-faq.component.html',
  styleUrls: ['./vendor-faq.component.scss'],
})
export class VendorFaqComponent implements OnInit {


  faqs: Observable<any>=this.faqService.getUserFaqsV();

  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit() {
  }


  addFaq() {
    if (this.faqService.faq.valid) {
      let tempFaq = this.faqService.faq.value;
      this.faqService.addFaqV(tempFaq).then(() => {
        this.faqService.faq.reset();
      });
    }
  }

  deleteFaq(f) {
    this.faqService.deleteFaqV(f);
  }




}
