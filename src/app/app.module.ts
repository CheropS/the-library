import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { DatePassedPipe } from './date-passed.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewFormComponent,
    ReviewDetailsComponent,
    DatePassedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
