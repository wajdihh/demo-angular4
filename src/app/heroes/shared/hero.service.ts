import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';
@Injectable()
export class HeroService {

  baseUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  // get
  getHeroesAsConfig() {
    return this.http.get(this.baseUrl + '/v1/others/regions');
  }

}
