import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/data-login';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 }
}
