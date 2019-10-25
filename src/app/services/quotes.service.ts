import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Quotes_10 } from '../models/quotes';
import { Quote } from '../models/quote';

@Injectable({
    providedIn: "root"
})

export class QuotesService {
    getQuotes(): Observable<Quote[]>{
        return of(Quotes_10)
    }

    // getQuote(quoteID : number) : Observable<Quote> {
    //     return this.getQuotes().pipe(
    //       map((quotes : Quote[]) => quotes.find((quote : Quote) => quote.id === quoteID))
    //     );
    //   }
}