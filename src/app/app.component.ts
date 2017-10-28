import { Component } from '@angular/core';
import { FlickService } from 'app/services/flick.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  ngOnInit() {
    this.flickService.getRecentPics(30,1);
  }
  constructor(public flickService : FlickService){}
  title = 'app';
}
