import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alertas } from 'src/services/alertas';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [alertas]
})
export class NavbarComponent implements OnInit {

  constructor(private alert: alertas,
    private _route: ActivatedRoute,
    private _router: Router, private servicioComunicacion: ComunicacionLoginService,
  ) {
  }

  ngOnInit() {
    
  }
  cerrarSesion() {
    /*this.servicioComunicacion.logout();
    if(this.ws)
    this.ws.close();
    this._router.navigate(['/home']);*/
  }
}
