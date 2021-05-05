//Importar los modulos del router de angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioLoginComponent } from './componentes/loginCMP/formulario-login/formulario-login.component';
import { HomeComponent } from './componentes/principal/home/home.component';
// Importar componentes a los cuales quiero hacer una pagina exclusiva



//Array de rutas

const appRoutes: Routes = [
    {path: '',component: FormularioLoginComponent},
    {path: 'home',component: FormularioLoginComponent},
    {path: 'index',component: HomeComponent}
    //{path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<NgModule> = RouterModule.forRoot(appRoutes);