import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../core/quote.service';
import { Quote } from './quote.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public quote = new Quote('', '');

  constructor(public quoteService: QuoteService) {
    this.getQuote();
  }

  ngOnInit() {
  }

  getQuote() {
    this.quoteService.getRandomQuote().subscribe((data: Quote) => {
      this.quote = new Quote(data[0].quote, data[0].character);
    });
  }

}
