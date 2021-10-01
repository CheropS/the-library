import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReviewComponent } from "./review/review.component";
import { ReviewDetailsComponent } from "./review-details/review-details.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes= [
  {path: 'search', component:SearchComponent},
  {path: 'reviews', component: ReviewComponent}, 
  {path: 'reviews/id', component: ReviewDetailsComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
