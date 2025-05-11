import { CarrentalService } from './../../core/services/carrental.service';
import { AfterViewInit, Component, inject } from '@angular/core';
import { BookingdataComponent } from "../bookingdata/bookingdata.component";
import { BookingDataInfoComponent } from "../booking-data-info/booking-data-info.component";
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ihistory } from '../../shared/interface/ihistory';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements AfterViewInit {
  private readonly flowbiteService=inject(FlowbiteService)
  private readonly formBuilder=inject(FormBuilder)
  private readonly carrentalService=inject(CarrentalService)


    historyData:Ihistory[]=[] 

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite(() => {
      
    });
  }


  custIdForm:FormGroup=this.formBuilder.group({
    Id:[null , Validators.required]
  })
  


 



  submitForm():void{
    const id=this.custIdForm.value.Id;
    this.carrentalService.filterBooking(id).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result===true){

          this.historyData=res.data


        }
       


        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
