import { AfterViewInit, Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { IbookingData } from '../../shared/interface/ibooking-data';
import { BookingComponent } from "../booking/booking.component";
import { CarrentalService } from '../../core/services/carrental.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookingdata',
  imports: [ DatePipe , RouterLink],
  templateUrl: './bookingdata.component.html',
  styleUrl: './bookingdata.component.scss',
  
})
export class BookingdataComponent implements OnInit {

  private readonly carrentalService=inject(CarrentalService)

  

 BookingDataElement:IbookingData={}as IbookingData;


  ngOnInit(): void {
        this.getData()
          console.log(this.BookingDataElement);
          
        
      
      
  }


  getData():void{
    this.carrentalService.bookedShowdata.subscribe({
      next:(data)=>{
        
        this.BookingDataElement=data
        
      }
    })
  }

}
