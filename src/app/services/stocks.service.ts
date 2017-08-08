import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class StocksService {

  private baseUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=MHH81AGK5BUOQ75L';

  constructor(private http: Http) { }

  getQuote(): Observable<any[]> {
    // const params: URLSearchParams = new URLSearchParams();
    // params.set('function', 'TIME_SERIES_INTRADAY');
    // params.set('SYMBOL', 'MSFT');
    // params.set('interval', '1min');
    // params.set('apikey', 'MHH81AGK5BUOQ75L');
    return this.http.get(this.baseUrl/*, { search: params }*/).map((res: Response) => res.json());
  }

}
