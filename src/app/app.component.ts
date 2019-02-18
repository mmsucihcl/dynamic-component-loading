import { Component, OnInit } from '@angular/core';

import { NewsFeedService }         from './news-feed.service';
import { NewsFeedItem }            from './news-feed-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-news-feed-banner [newsfeeds]="newsfeeds"></app-news-feed-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  newsfeeds: NewsFeedItem[];

  constructor(private newsFeedService: NewsFeedService) {}

  ngOnInit() {
    this.newsfeeds = this.newsFeedService.getAds();
  }
}

