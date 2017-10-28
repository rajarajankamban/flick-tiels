import { Component, OnInit } from '@angular/core';
import { FlickService } from 'app/services/flick.service';
import { Photo } from "app/models/photo";
import { Router } from "@angular/router"
@Component({
  selector: '[app-flick-grid]',
  templateUrl: './flick-grid.component.html',
  styleUrls: ['./flick-grid.component.css']
})
export class FlickGridComponent implements OnInit {

  constructor(public flickService : FlickService,
              public router : Router) { }

  ngOnInit() {
  }

  navigatePage(isnext:boolean){
    this.flickService.navigatePage(30,isnext);
  }
  reviewImage(photo : Photo){
    this.flickService.setReviewphoto(photo);
    this.router.navigate(['/reviewpost']);
  }
}
