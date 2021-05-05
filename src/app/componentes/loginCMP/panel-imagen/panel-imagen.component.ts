import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-imagen',
  templateUrl: './panel-imagen.component.html',
  styleUrls: ['./panel-imagen.component.css']
})
export class PanelImagenComponent implements OnInit {
  public articulos: string[];
  
  constructor() { 
    this.articulos=["Primer Articulo","Segundo Articulo", "Tercer articulo", "Cuarto Articulo"];
  }

  ngOnInit(): void {
  }

}
