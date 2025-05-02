import { Router, RouterLink } from '@angular/router';
import { FlowbiteService } from './../../core/services/flowbite/flowbite.service';
import { AfterViewInit, Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CarrentalService } from '../../core/services/carrental.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'node:console';
import { Icar } from '../../shared/interface/icar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,ReactiveFormsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  private readonly flowbiteService=inject(FlowbiteService)
  private readonly carrentalService=inject(CarrentalService)
  private readonly formBuilder=inject(FormBuilder)
  private readonly router=inject(Router)


  carData:Icar[]=[]



  newCarForm:FormGroup = this.formBuilder.group({
    Brand: [null , ],
    Model: [null , ],
    Year: [null , ],
    Color: [null , ],
    DailyRate: [null , ],
    CarImage: [null , ],
    RegNo: [null , ],
    
  })

  ngAfterViewInit(): void {
    this.flowbiteService.loadFlowbite(() => {
      
    });
  }



  getCarsData():void{
    this.carrentalService.getCarsData().subscribe({
      next:(res)=>{
        this.carData=res.data

      },error:(err)=>{
        console.log(err);
        
      }
    })
  }



  submitForm():void{
    this.carrentalService.creatNewCar(this.newCarForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result===true){
          this.carData=res.data   
        }

        this.getCarsData();

        this.router.navigate(['/vehicles']).then(()=>{
          window.location.reload();
        })
        
        
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
  

}
