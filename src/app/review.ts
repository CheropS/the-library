export class Review {

    showReviewDetails: boolean;

    constructor(public id:number, public datePosted:Date, public review:string, public userName:string, public like:number, public dislike:number, public popular: boolean){

        this.showReviewDetails=false;
    }
    
}
