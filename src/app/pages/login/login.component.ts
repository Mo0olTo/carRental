import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly router=inject(Router)


userName:string='';
password:string='';


userLogin():void{
  if(this.userName =="mostafa" && this.password=="admin"){

    this.router.navigate(['/dashboard'])
  }
}

}
