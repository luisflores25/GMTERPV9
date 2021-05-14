//Importar los modulos del router de angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

// Importar componentes a los cuales quiero hacer una pagina exclusiva
import { FormularioLoginComponent } from './componentes/loginCMP/formulario-login/formulario-login.component';
import { FormularioLogin2Component } from './componentes/loginCMP/formulario-login2/formulario-login2.component';
import { HomeComponent } from './componentes/principal/home/home.component';


//Array de rutas

const appRoutes: Routes = [
    {path: '',component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home',component: FormularioLoginComponent},
    {path: 'home2',component: FormularioLogin2Component},
    {path: 'index',component: HomeComponent}
    //{path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<NgModule> = RouterModule.forRoot(appRoutes);