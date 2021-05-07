import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/data-login';
import { alertas } from '../../../../services/alertas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css'],
  providers: [alertas,AppComponent]
})
export class FormularioLoginComponent implements OnInit {
  public login: User;
  public aviso: string = "";
  showFiller = false;
  constructor(
    private alert: alertas,
    private notif: AppComponent,
    private _route: ActivatedRoute,
    private _router: Router,
    private data: ComunicacionLoginService) {
    this.login = new User(null,null, null, null,null);

  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.session();
  }
  session() {
        this.data.login(this.login).subscribe(res => {
          if (res){
            this.login=res.user;
            this.data.enviarMessage(this.login);
            this.data.verifyToken(res.accessToken).subscribe(auth => {
              if(auth){
                this.alert.exito("Sesión " + res.user.empresa + " iniciada");
                this._router.navigate(['/index']);
              }
            });
          }else
            this.aviso=res.error.message;
        });

  }
  verifySeal() {
    window.open("https://seal.godaddy.com/verifySeal?sealID=Fj10rZwOjMOauTAZX9VIiFOUOmLcyP27MuBr3Vij6AK9PjeN7QruUE", '_blank');

  }
  /*closeChannel(){
      this.ws.onclose = (msg => {
        this.notif.onSuccess("Sesión "+  this.login +" cerrada");
      });
    }*/
}
