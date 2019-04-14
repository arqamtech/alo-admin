import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/Services/Faqs/faq.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-faq',
  templateUrl: './vendor-faq.component.html',
  styleUrls: ['./vendor-faq.component.scss'],
})
export class VendorFaqComponent implements OnInit {


  faqs: Observable<any>;
  showSpinner: boolean = true;
  addSpinner: boolean = false;

  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit() {
    this.faqs = this.faqService.getUserFaqsV();
    this.faqs.subscribe(() => this.showSpinner = false);
  }


  addFaq() {
    if (this.faqService.faq.valid) {
      let tempFaq = this.faqService.faq.value;
      this.addSpinner = true;
      this.faqService.addFaqV(tempFaq).then(() => {
        this.faqService.faq.reset();
      }).then(() => {
        this.addSpinner = false;
      });
    }
  }

  deleteFaq(f) {
    this.faqService.deleteFaqV(f);
  }




}
