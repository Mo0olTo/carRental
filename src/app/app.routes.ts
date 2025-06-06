import { RenderMode } from '@angular/ssr';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { BookingdataComponent } from './pages/bookingdata/bookingdata.component';
import { BookingDataInfoComponent } from './pages/booking-data-info/booking-data-info.component';
import { HistoryComponent } from './pages/history/history.component';


export const routes: Routes = [

    {path:'' , redirectTo:'vehicles' , pathMatch:'full'},
    {path:'' , component:AuthComponent  , title:"Auth", children:[
        {path:'login' , component:LoginComponent , title:'Login'},
        
    ]},

    
    {path:'' , component:MainComponent  , children:[

        {path:'booking/:id' , component:BookingComponent , title:'Booking' , data:{RenderMode:'no-prerender'}},
        {path:'bookingdata' , component:BookingdataComponent , title:'Booking Info'},
        {path:'history' , component:HistoryComponent , title:'History'},
        {path:'dashboard' , component:DashboardComponent , title:'Dashboard'},
        {path:'customer' , component:CustomerComponent , title:'Customer'},
        {path:'vehicles' , component:VehiclesComponent , title:'Vehciles'},
        {path:'**' , component:NotfoundComponent ,title:'Error'}
    ]}
];
