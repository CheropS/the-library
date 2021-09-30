import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  @Input() review:Review;
  @Output() isDeleted=new EventEmitter<boolean>();

  reviewDeletion(remove:boolean){
    this.isDeleted.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
