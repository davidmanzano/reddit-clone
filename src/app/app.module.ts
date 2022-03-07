import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CommentsComponent } from './comments/comments.component';
import { RedditApiService } from './services/reddit-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CommentsComponent,
    ListingCardComponent,
    CommentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
        {path: '', component: HomepageComponent},
        // {path: 'comments', component: CommentsComponent, pathMatch: 'full'},
    ]),
  ],
  exports: [
    NgxSpinnerModule,
  ],
  providers: [RedditApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
