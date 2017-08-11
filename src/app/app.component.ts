import { Component, OnInit } from '@angular/core';

import { StocksService } from './services/stocks.service';
import { NytService } from './services/nyt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rows: any[] = [];
  stories: any[] = [];
  sections: any[] = [];

  constructor(
    private stockService: StocksService,
    private nytService: NytService
  ) { }

  // FUNCTIONS
  getQuote() {
    const queryStringObject = {
      func: 'TIME_SERIES_INTRADAY',
      symb: 'MSFT',
      intv: '1min',
      apikey: 'MHH81AGK5BUOQ75L'
    };

    this.stockService.getQuote(queryStringObject).subscribe(
      (data: any) => {
        const seriesData = data['Time Series (1min)'];
        this.arrayifyProps(seriesData, this.rows);
      }
    );
  }

  getAllStories() {
    const configObject = {
      source: 'all',
      section: 'movies',
      format: 'json',
      apikey: '756afd4232054fa6b6adfd69d04af251'
    };

    this.nytService.getAllStories(configObject).subscribe(
      (data: any) => {
        this.stories = data;
      }
    );
  }

  getAllSections() {
    const configObject = {
      apikey: '756afd4232054fa6b6adfd69d04af251'
    };

    this.nytService.getAllSections(configObject).subscribe(
      (data: any) => {
        this.sections = data;
      }
    );
  }

  arrayifyProps(obj, arry) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arry.push(obj[prop]);
      }
    }
  }

  // EVENTS
  onDDSelect(val) {
    alert(val);
  }

  ngOnInit() {
    this.getAllSections();
    this.getQuote();
    this.getAllStories();
  }
}
