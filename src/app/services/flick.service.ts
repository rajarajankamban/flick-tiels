import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/Rx';
import {FlickHttpService} from 'app/services/flickhttp.service';
import { Photo } from 'app/models/photo';
@Injectable()
export class FlickService {

  constructor(public flickhttp : FlickHttpService) { }

  public $recentpics :BehaviorSubject<Photo[]> = new BehaviorSubject(null);
  public selectedReviewPhoto : Photo = null;
  public totalPages : number = 0;
  public currentPage : number = 1;

  getRecentPics(perpage: number,page: number):void{
    this.flickhttp.getRecent(perpage,page).subscribe(res => {
      if(res) {
        let photos : Photo[] = res.photos.photo;
        this.totalPages = res.photos.pages;
        this.currentPage = res.photos.page;
        console.log(res.photos.page);
        photos.map(data => {
          data.imageurlN = this.generateImgSrcUrl(data.farm,data.server,data.id,data.secret,'n');
          data.imageurlO = this.generateImgSrcUrl(data.farm,data.server,data.id,data.secret,'b');
        });
        this.$recentpics.next(res.photos.photo);
      }
    });
  }

  navigatePage(perpage:number,isnext :boolean){
    isnext ? this.currentPage++ : this.currentPage--;
    console.log(this.currentPage);
    console.log(isnext);
    this.getRecentPics(perpage,this.currentPage);
  }

  setReviewphoto(photo : Photo){
    this.selectedReviewPhoto = photo;
  }
  generateImgSrcUrl(farmid: number,server :string,id:string,secret :string,size : string) : string{
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

    let url = "https://farm"+farmid+".staticflickr.com/"+server+"/"+id+"_"+secret+"_"+size+".jpg";
    return url;
  }

}
