import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAppService {
  constructor(
    private http: HttpClient
  ) { }

  public getMyPurchases(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2");
  }
}
