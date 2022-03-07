import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent implements OnInit {
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() body: string = "";
  @Input() thumbnailUrl: string = "";
  @Input() fullImageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  imageNotFound(event: any) {
    let imageNotFoundUrl = "https://cdn.browshot.com/static/images/not-found.png";
    event.target.src = (this.thumbnailUrl) ? this.thumbnailUrl : imageNotFoundUrl
  }

  viewImage() {
    if(this.fullImageUrl.includes('.jpg')) {
      window.open(this.fullImageUrl);
    } else {
      window.open(this.thumbnailUrl);
    }
  }

}
