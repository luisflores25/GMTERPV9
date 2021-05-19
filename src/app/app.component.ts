import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { User } from './Models/data-login';
import IdleTimer from "./IdleTimer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Active";
  timer: IdleTimer;
  user: User;
  constructor(
    private services: NotificationsService
  ){
  }

  logout() {
}
ngOnInit() {
  this.timer = new IdleTimer({
    timeout: 600, //expired after 10 min
    onTimeout: () => {
      this.logout();
    }
  });
}
ngOnDestroy() {
  this.timer.clear();
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
