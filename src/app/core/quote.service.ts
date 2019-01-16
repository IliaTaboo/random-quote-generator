import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }

  getRandomQuote() {
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes');
  }
}
