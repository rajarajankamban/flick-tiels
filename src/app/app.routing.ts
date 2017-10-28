import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlickGridComponent } from 'app/flick-grid/flick-grid.component';
import { ReviewPostComponent } from 'app/review-post/review-post.component';

const routes: Routes = [
    { path: 'home', component: FlickGridComponent },
    { path: 'reviewpost', component : ReviewPostComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' } ,
    { path: '**', redirectTo: 'home', pathMatch: 'full' } 
  ];


@NgModule({
    imports: [
      RouterModule.forRoot(
        routes 
      )
    ],
    exports: [
      RouterModule
    ] 
    
  })
  export class AppRouting { };
  
   