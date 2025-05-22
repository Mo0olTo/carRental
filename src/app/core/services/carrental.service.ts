
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environement } from '../Environment/environment';
import { Icar } from '../../shared/interface/icar';
import { Ibooking } from '../../shared/interface/ibooking';



@Injectable({
  providedIn: 'root'
})
export class CarrentalService {

  constructor(private httpClient:HttpClient ) {}

  agentHost:BehaviorSubject<boolean>=new BehaviorSubject(false)

  bookedShowdata:BehaviorSubject<any>=new BehaviorSubject({})

   


  getDashBoardData():Observable<any>{
    return this.httpClient.get(`${environement.apiUrl}/GetDashboardData`)
  }

  getCarsData():Observable<any>{
    return this.httpClient.get(`${environement.apiUrl}/GetCars`)
  }



  creatNewCar(data:Icar):Observable<any>{
    return this.httpClient.post(`${environement.apiUrl}/CreateNewCar`,data ,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }


  deleteCar(id:number):Observable<any>{
    return this.httpClient.delete(`${environement.apiUrl}/DeleteCarbyCarId?carid=${id}`)
  }



  // booking apis 



  createNewBooking(data:Ibooking):Observable<any>{
    return this.httpClient.post(`${environement.apiUrl}/CreateNewBooking`,data)
  }


  filterBooking(id:number):Observable<any>{
    return this.httpClient.get(`${environement.apiUrl}/geAllBookingsByCustomerId?custId=${id}`)
  }





}
