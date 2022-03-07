import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../services/reddit-api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  listings: any;
  showComments: boolean = false;
  listingId: string = "";
  listingTitle: string = "";
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  loading: boolean = true;

  constructor(
    private redditApiService: RedditApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.retrieveSubredditInfo();
  }

  handleListingClick(event: any, listingId: string, listingTitle: string) {
    if(event.target.id !== 'thumbnail') {
      this.listingId = listingId;
      this.listingTitle = listingTitle;
      this.showComments = true;
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    scroll(0,0);
  }

  retrieveSubredditInfo() {
    this.spinner.show();
    this.redditApiService.getSubredditInfo()
    .subscribe(
      (listingsInfo) => {
        this.listings = listingsInfo.data.children;
        this.spinner.hide();
        this.loading = false;
      },
      err => console.log('HTTP Error', err)
    )
  }

  handleBackClick() {
    this.retrieveSubredditInfo();
    this.showComments = false;
  }

}
