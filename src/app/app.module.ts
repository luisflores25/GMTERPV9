import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing.module'
import {FormsModule} from '@angular/forms';
import { AuthenticationService } from './_services';
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';

import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './componentes/loginCMP/formulario-login/formulario-login.component';
import { PanelImagenComponent } from './componentes/loginCMP/panel-imagen/panel-imagen.component';
import { FooterComponent } from './componentes/loginCMP/footer/footer.component';
import { SidebarComponent } from './componentes/loginCMP/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PanelArticuloComponent } from './componentes/loginCMP/panel-articulo/panel-articulo.component';
import { HomeComponent } from './componentes/principal/home/home.component';
import { SidenavAutosizeComponent } from './componentes/principal/sidenav-autosize/sidenav-autosize.component';
import { NavbarComponent } from './componentes/principal/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications'

@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    PanelImagenComponent,
    SidebarComponent,
    FooterComponent,
    PanelArticuloComponent,
    HomeComponent,
    SidenavAutosizeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,HttpClientModule,SimpleNotificationsModule.forRoot()
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },appRoutingProviders,
  fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
