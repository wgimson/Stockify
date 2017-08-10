import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class StocksService {

  private baseUrl = 'https://www.alphavantage.co/query';
  // ?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=MHH81AGK5BUOQ75L';

  constructor(private http: Http) { }

  getQuote(qStrObj): Observable<any> {
    // CAN'T FIGURE OUT HOW TO MAKE THIS WORK
    // let params = new URLSearchParams();
    // params.set('function', 'TIME_SERIES_INTRADAY')
    // params.set('symbol', 'MSFT');
    // params.set('interval', '1min');
    // params.set('apikey', 'MHH81AGK5BUOQ75L');

    const queryString = `?function=${qStrObj.func}&symbol=${qStrObj.symb}&interval=${qStrObj.intv}&apikey=${qStrObj.apikey}`;
    const url = this.baseUrl + queryString;

    return this.http.get(url)
                    .map((res: Response) => res.json());
  }

}
