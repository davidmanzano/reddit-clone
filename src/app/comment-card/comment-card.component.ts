import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  @Input() replies: any;
  @Input() commentBody: string = "";
  @Input() author: string = "";
  displayReplies: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleReplies() {
    if(this.replies) {
      this.displayReplies = !this.displayReplies;
    }
  }

}
