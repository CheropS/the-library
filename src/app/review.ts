export class Review {
    
    showReviewDetails: boolean;

    constructor(public datePosted:Date,public review:string,public userName:string,public like:number,public dislike:number){

    }
    
}
