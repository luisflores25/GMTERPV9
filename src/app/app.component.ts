import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GMTERPV9';

  constructor(
    private services: NotificationsService
  ){
  }

  onSuccess(message: string){
    this.services.info(
      'Info',message, {
        position: ['bottom','right'],
        timeOut:2000,
        animate: 'fade',
        showProgressBar: true
      });
  }
  
  onError(message: string){
    this.services.error(
      'Error',message, {
        position: ['bottom','right'],
        timeOut:2000,
        animate: 'fade',
        showProgressBar: true
      });
  }

}
