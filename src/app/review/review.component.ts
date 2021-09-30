import { Component, OnInit } from '@angular/core';
import { Review } from './../review';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  reviews: Review[] = [
    new Review(" well-curated compilation of important primary documents representing more than 200 years of American aggression toward the media. General readers and students of journalism, communications, history, and political science will find this work useful.", "Jessica Roberts"),
    new Review("Growth in the audiobook category has continued, fueled by readers seeking new experiences. In fact, more than 79,000 audiobooks were published in the United States last year, according to the Audio Publishers Association (APA). That represents a 39 percent increase in the number of audiobooks produced since 2019, Publishing Perspectives reports.", "Dennis Pierce"),
    new Review("The personal finance books most in-demand with readers discuss paying for college, retirement and Social Security, handling money during a crisis, and more", "John Doe"),
    new Review("Dekker (“Seer” series) comes into her own with this thought-provoking companion to the Girl Behind the Red Rope, coauthored with her father Ted Dekker, exploring themes of good, evil, and the power of choice. Fans of thrillers by James Rollins, Ronie Kendig, or the “X-Men” comics series will relish this fast-paced story.", "Rachelle Dekker")
  ];
  
  addNewReview(review){
    let reviewsLength=this.reviews.length+1;

    let reviewObj=new Review(reviewsLength, new Date, review.userName, review.review,0,0,false);

    this.reviews.push(reviewObj);
  }
  toggleDetails(index){
    this.reviews[index].showReviewDetails=!this.reviews[index].showReviewDetails
  }

  deleteReview(isDeleted, index){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.reviews[index].review}?`)
      if(remove){
        this.reviews.splice(index,1)
      }
    }

  }
  upvoteFunc(index){
      var up=this.reviews[index].like+1;
      this.reviews[index].like=up;
      
  }

  
  downvoteFunc(index){
    var down=this.reviews[index].dislike+1;
    this.reviews[index].dislike=down;
  
}


  constructor() { }

  ngOnInit(): void {
  }

}
