import { Component, Input, OnInit } from '@angular/core';
import { RedditApiService } from '../services/reddit-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any;
  @Input() listingId: string = "";
  @Input() listingTitle: string = "";

  constructor(
    private redditApiService: RedditApiService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.redditApiService.getListingComments(this.listingId)
          .subscribe(
            (commentsInfo) => {
              this.comments = commentsInfo[1].data.children.map((comment: any) => {
                return comment.data;
              })
              this.spinner.hide();
            },
            err => console.log('HTTP Error', err)
          )
  }

}
