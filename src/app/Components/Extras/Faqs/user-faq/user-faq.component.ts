import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/Services/Faqs/faq.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-faq',
  templateUrl: './user-faq.component.html',
  styleUrls: ['./user-faq.component.scss'],
})
export class UserFaqComponent implements OnInit {

  faqs: Observable<any>;
  showSpinner: boolean = true;
  addSpinner: boolean = false;

  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit() {
    this.faqs = this.faqService.getUserFaqs();
    this.faqs.subscribe(() => this.showSpinner = false);
  }


  addFaq() {
    if (this.faqService.faq.valid) {
      let tempFaq = this.faqService.faq.value;
      this.addSpinner = true;
      this.faqService.addFaq(tempFaq).then(() => {
        this.faqService.faq.reset();
      }).then(() => {
        this.addSpinner = false;
      });
    }
  }


  deleteFaq(f) {
    this.faqService.deleteFaq(f);
  }


}
