import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }

  getRandomQuote() {
    return this.http.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?');
  }
}
