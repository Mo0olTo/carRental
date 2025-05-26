import { Router, RouterLink } from '@angular/router';
import { FlowbiteService } from './../../core/services/flowbite/flowbite.service';
import { AfterViewInit, Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class NavbarComponent implements AfterViewInit , OnInit {

  private readonly flowbiteService=inject(FlowbiteService)
  private readonly carrentalService=inject(CarrentalService)
  private readonly formBuilder=inject(FormBuilder)
  private readonly router=inject(Router)


  carData:Icar[]=[]

  hostCarIcon:boolean = false;
  isSidebarVisible:boolean=false;

  file!:File

  isSuccess:Boolean=false;



  newCarForm:FormGroup = this.formBuilder.group({
    Brand: [null , ],
    Model: [null , ],
    Year: [null , ],
    Color: [null , ],
    DailyRate: [null , ],
    CarImage: [null , ],
    RegNo: [null , ],
    
  })

    ngOnInit(): void {
      this.carrentalService.agentHost.subscribe({
        next:(res)=>{
          this.hostCarIcon=res
        }
      })

     
      
    }

    

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
    this.isSuccess=true;

    this.carrentalService.creatNewCar(this.newCarForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.result===true){
          this.carData=res.data   
          
        }

         this.isSuccess=false;

        this.getCarsData();

        this.router.navigate(['/vehicles']).then(()=>{
          window.location.reload();
        })
        
        
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }

  toggleSidebar(): void {
    this.hostCarIcon = true;
  
    // Delay to allow Angular to render the element
    setTimeout(() => {
      initFlowbite();
    }, 0);
  }



}
