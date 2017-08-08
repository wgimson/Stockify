import { Component, OnInit } from '@angular/core';

import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rows: any[] = [];

  constructor(
    private stockService: StocksService
  ) { }

  // FUNCTIONS
  getQuote() {
    this.stockService.getQuote().subscribe(
      (data: any) => {
        const seriesData = data['Time Series (1min)'];
        this.arrayIfyProps(seriesData, this.rows);
      }
    );
  }

  arrayIfyProps(obj, arry) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arry.push(obj[prop]);
      }
    }
  }

  ngOnInit() {
    this.getQuote();
  }
}
