import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/data-login';
import { ComunicacionLoginService } from '../../../../services/comunicacionLogin';

@Component({
  selector: 'app-sidenav-autosize',
  templateUrl: './sidenav-autosize.component.html',
  styleUrls: ['./sidenav-autosize.component.css']
})
  export class SidenavAutosizeComponent {
    showFiller = false;
    @Input() user: User;
    @Input() ws: WebSocket;
  }

