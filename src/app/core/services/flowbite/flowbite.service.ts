import { Injectable } from '@angular/core';
declare function initFlowbite(): void;
@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  oadFlowbite(callback?: () => void): void {
    try {
      initFlowbite();
      if (callback) callback();
    } catch (err) {
      console.error('Flowbite init error:', err);
    }
  }
}
