import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  throwError as observableThrowError,
  Observable,
  Subject,
  BehaviorSubject
} from 'rxjs';


@Injectable()
export class RedditApiService {
  private subreddit = "r/battlestations"
  private redditInfoUrl = "http://www.reddit.com/" + this.subreddit + "/hot.json?limit=100";
  private subredditCommentsUrl = "http://www.reddit.com/" + this.subreddit + "/comments/";


  constructor(private http: HttpClient, router: Router) {}

  getSubredditInfo() : Observable<any> {
    return this.http.get(this.redditInfoUrl);
  }

  getListingComments(articleId: string) : Observable<any> {
    return this.http.get(this.subredditCommentsUrl + articleId + ".json");
  }
}