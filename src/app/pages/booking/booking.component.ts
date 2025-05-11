import { Component, inject, Injectable, Input, input, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ibooking } from '../../shared/interface/ibooking';
import { CarrentalService } from '../../core/services/carrental.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IbookingData } from '../../shared/interface/ibooking-data';

  
@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule , ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {

    private readonly formBuilder=inject(FormBuilder)
    private readonly carrentalService=inject(CarrentalService)
    private readonly activatedRoute=inject(ActivatedRoute)
    private readonly router=inject(Router)
    
    




    bookingData:Ibooking={}as Ibooking;
   successData:IbookingData={}as IbookingData;




    carId:string|null='';

    isSuccess:boolean=false
    isBooked:boolean=false



    alreadyBooked:string=''


  bookingForm:FormGroup = this.formBuilder.group({
    CustomerName:[null,],
    CustomerCity:[null,],
    MobileNo:[null,],
    Email:[null,],
    CarId:[null,],
    BookingDate:[null,],
   
  })



  ngOnInit(): void {
      this.getCarId()
  }





  getCarId():void{
    this.activatedRoute.paramMap.subscribe({
      next:(param)=>{
        console.log(param);
        this.carId=param.get('id')

      }
    })

    

  }


  submitForm():void{
    this.isSuccess=false
    this.carrentalService.createNewBooking(this.bookingForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        

        if(res.result===true){
          this.isSuccess=true;
          this.carrentalService.bookedShowdata.next(res.data);

          console.log(this.successData);
          
          


          setTimeout(() => {
            this.router.navigate(['/bookingdata'])
          }, 3000);

          
          
        }

        if(res.result===false){
          this.isBooked=true
          this.alreadyBooked=res.message

        }
        
      },error:(err)=>{
        console.log(err);
        
      }
    })

  }




  

}
