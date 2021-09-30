export class Review {

    showReviewDetails:boolean;
    constructor(public datePosted:Date,public userName:string,public review:string,public like:number,public dislike:number){

        this.showReviewDetails=false;
    }
    
}
