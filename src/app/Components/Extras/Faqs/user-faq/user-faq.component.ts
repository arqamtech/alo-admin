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

  constructor(
    private faqService: FaqService,
  ) { }

  ngOnInit() {
    this.getFaqs();
  }


  addFaq() {
    if (this.faqService.faq.valid) {
      let tempFaq = this.faqService.faq.value;
      this.faqService.addFaq(tempFaq).then(() => {
        this.faqService.faq.reset();
      });
    }
  }


  deleteFaq(f) {
    this.faqService.deleteFaq(f);
  }

  getFaqs() {
    this.faqs = this.faqService.getUserFaqs()
  }

}
