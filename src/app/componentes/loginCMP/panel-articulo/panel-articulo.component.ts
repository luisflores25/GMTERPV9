import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-articulo',
  templateUrl: './panel-articulo.component.html',
  styleUrls: ['./panel-articulo.component.css']
})
export class PanelArticuloComponent implements OnInit {
  public img: String;
  constructor() { 
    this.img='./images/aviso.png';
  }

  ngOnInit(): void {
  }

}
