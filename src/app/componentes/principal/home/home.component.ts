import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/data-login';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
 }
}
