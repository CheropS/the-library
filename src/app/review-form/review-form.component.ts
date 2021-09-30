import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from '../review';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  newReview = new Review(0,new Date(),"","","",0,0,false)
  @Output() addReview= new EventEmitter<Review>();

  onSubmit(form: NgForm){
    var check=this.newReview;
    
    this.addReview.emit(this.newReview);
    form.resetForm(); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
