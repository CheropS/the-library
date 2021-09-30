import { Component, OnInit } from '@angular/core';
import { Review } from '../review';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  reviews = [
    new Review(" well-curated compilation of important primary documents representing more than 200 years of American aggression toward the media. General readers and students of journalism, communications, history, and political science will find this work useful.", "Jessica Roberts", "Founder at ET Company"),
    new Review("Growth in the audiobook category has continued, fueled by readers seeking new experiences. In fact, more than 79,000 audiobooks were published in the United States last year, according to the Audio Publishers Association (APA). That represents a 39 percent increase in the number of audiobooks produced since 2019, Publishing Perspectives reports.", "Dennis Pierce", "Photographer at Studio LA"),
    new Review("The personal finance books most in-demand with readers discuss paying for college, retirement and Social Security, handling money during a crisis, and more", "John Doe", "Front-end Developer in NY")
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
