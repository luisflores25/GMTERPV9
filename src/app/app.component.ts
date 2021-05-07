import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { User } from './Models/data-login';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GMTERPV9';
  user: User;
  constructor(
    private services: NotificationsService,private authenticationService: AuthenticationService
  ){this.authenticationService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authenticationService.logout();
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
