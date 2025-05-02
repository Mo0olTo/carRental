import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
declare function initFlowbite(): void;
@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  

  loadFlowbite(callback: (flowbite: any) => void) {
    
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
   
  }
}
