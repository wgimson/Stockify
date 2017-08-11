import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class NytService {

  private baseUrl = 'https://api.nytimes.com/svc/news/v3/content/';

  constructor(private http: Http) { }

  getAllStories(configObj): Observable<any[]> {

    const url = this.baseUrl + `${configObj.source}/${configObj.section}.${configObj.format}?api-key=${configObj.apikey}`;
    return this.http.get(url)
                    .map((res: Response) => res.json().results);
  }

  getAllSections(configObject): Observable<any[]> {
    const baseUrl = 'http://api.nytimes.com/svc/news/v3/content/section-list.json';
    const url = baseUrl + `?api-key=${configObject.apikey}`;
    return this.http.get(url)
                    .map((res: Response) => res.json().results);
  }

}
