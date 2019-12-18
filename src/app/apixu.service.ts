import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }

  getWeather(location){
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=dd78415e366641048db155044192305&q=Paris' + location)
;  }
}

