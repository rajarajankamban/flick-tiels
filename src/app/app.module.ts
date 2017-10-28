import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { FlickGridComponent } from './flick-grid/flick-grid.component';
import { ReviewPostComponent } from './review-post/review-post.component';
import { FlickService } from "app/services/flick.service"
import { FlickHttpService } from 'app/services/flickhttp.service';
@NgModule({
  declarations: [
    AppComponent,
    FlickGridComponent,
    ReviewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    FormsModule
  ],
  providers: [
    FlickHttpService,
    FlickService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
