import { Component, inject, OnInit } from '@angular/core';
import { CarrentalService } from '../../core/services/carrental.service';
import { log } from 'console';
import { Icar } from '../../shared/interface/icar';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  private readonly carrentalService=inject(CarrentalService)


  carData:Icar[]=[]

  ngOnInit(): void {
      this.getdata();

      console.log(this.carData);
      
  }


  getdata():void{
    this.carrentalService.getCarsData().subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result== true){

          this.carData=res.data

          
          

        }
        
      }, error:(err)=>{
        console.log(err);
        
      }
    })


  }

}
