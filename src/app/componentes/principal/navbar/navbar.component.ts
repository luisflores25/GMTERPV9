import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alertas } from 'src/services/alertas';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';
import { User } from '../../../Models/data-login';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [alertas]
})
export class NavbarComponent implements OnInit {
  public user: User;
  public ws: WebSocket;
  constructor(private alert: alertas,
    private _route: ActivatedRoute,
    private _router: Router,private servicioComunicacion: ComunicacionLoginService,
    private notif: AppComponent
    ) {
      this.user = new User('',sessionStorage.getItem('EMPRESA'),sessionStorage.getItem('USER'),'')
     }

    ngOnInit() {
      this.ws = new WebSocket('ws://localhost:6060');
      this.ws.onopen = () => {
        this.ws.send(this.user.empresa);
      }
      this.ws.onmessage = (msg) => {
        this.notif.onSuccess(msg.data);
      };
 }
  cerrarSesion(){
  this.servicioComunicacion.logout();
  this.ws.close();
  }
}
