
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CarrentalService } from '../../core/services/carrental.service';
import { Icar } from '../../shared/interface/icar';
import { FlowbiteService } from '../../core/services/flowbite/flowbite.service';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  imports: [ CurrencyPipe ,RouterLink],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements OnInit , AfterViewInit , OnDestroy {
  private readonly carrentalService=inject(CarrentalService)
  private readonly flowbiteService=inject(FlowbiteService)
  private readonly router=inject(Router)
  private subscribtiion= new Subscription();




   carData:Icar[]=[]



    rent:boolean=false;
    host:boolean=false;




    


  ngOnInit(): void {
    this.getdata()
   
    
    
      
  }

  ngAfterViewInit():void {
    this.flowbiteService.loadFlowbite(() => {
      
    });

    
    
  }



   getdata():void{
    this.carrentalService.getCarsData().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result=== true){

          this.carData=res.data

        }
        
      }, error:(err)=>{
        console.log(err);
        
      }
    })


  }


  removeCar(id:number):void{
    this.carrentalService.deleteCar(id).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result===true){
          this.getdata();

        }
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }


  rentCar():void{
    this.rent=true
    this.host=false
    this.carrentalService.agentHost.next(false)
  }

  hostCar():void{
    this.host=true;
    this.rent=false;
    this.carrentalService.agentHost.next(true)


  } 

  hideDiv(el:HTMLDivElement):void{
    el.classList.add(`hidden`)
  }




 ngOnDestroy(): void {
     this.subscribtiion.unsubscribe()
 }



}
