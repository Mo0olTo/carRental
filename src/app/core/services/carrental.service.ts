import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrentalService {

  constructor(private httpClient:HttpClient ) {}


  getDashBoardData():Observable<any>{
    return this.httpClient.get(`${environement.baseUrl}GetDashboardData`)
  }

  getCarsData():Observable<any>{
    return this.httpClient.get(`${environement.baseUrl}GetCars`)
  }
}
