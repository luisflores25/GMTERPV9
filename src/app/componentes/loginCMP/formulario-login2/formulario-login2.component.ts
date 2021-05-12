import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../_services/authentication.service';
import { User } from 'src/app/Models/data-login';

@Component({
  selector: 'app-formulario-login2',
  templateUrl: './formulario-login2.component.html',
  styleUrls: ['./formulario-login2.component.css']
})
export class FormularioLogin2Component implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  public formData: User;
  constructor(
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
) { 
  this.formData= new User("","","","");
    // redirect to home if already logged in
    if (this.authenticationService.userValue) { 
       this.router.navigate(['/']);
    }
}

  ngOnInit() {
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    this.loading = true;
    this.authenticationService.login(this.formData.empresa,this.formData.usuario,this.formData.password)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate([this.returnUrl]);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
    }
}
