import { Injectable } from '@angular/core';
import {Http, Headers,Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class FlickHttpService {

  constructor(public http : Http) { }
  baseUrl: string = "https://api.flickr.com/services/rest/";
  apiKey: string = "&api_key=5c362bfd28681488448f4e8f748ce877&format=json&nojsoncallback=1";
  getHeaders (): Headers{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin','*');
    return headers;
  }

  getRecent(perPage:number,page:number): Observable <any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.get(this.baseUrl+"?method=flickr.photos.getRecent&per_page="+perPage+this.apiKey+"&page="+page).map(this.extractData).share();
  }

  extractData(res:Response){
    let resobj= <any>(res.json());
    return resobj;
  }
}
