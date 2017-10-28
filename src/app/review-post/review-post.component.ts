import { Component, OnInit } from '@angular/core';
import { FlickService } from "app/services/flick.service";
import { Router } from "@angular/router";
import { Photo } from "app/models/photo"
@Component({
  selector: 'app-review-post',
  templateUrl: './review-post.component.html',
  styleUrls: ['./review-post.component.css']
})
export class ReviewPostComponent implements OnInit {

  constructor(public flickService : FlickService,
              public router : Router) { }
  rating : string[] = ['1','2','3','4','5','6','7','8','9','10'];
  photo : Photo = null;
  ngOnInit() {
    if(!this.flickService.selectedReviewPhoto){
      this.router.navigate(['/home']);
    }
    else{
      this.photo = this.flickService.selectedReviewPhoto;
      this.photo.rating = null;
    }
    
  }

  onSubmit(form){
    this.photo.rating = form.rating;
    console.log(form.rating);
    this.photo.ratedby = form.user;
    this.photo.reason = form.reason;
    this.router.navigate(['/home']);
  }

}
