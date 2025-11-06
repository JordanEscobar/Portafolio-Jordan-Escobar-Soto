import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Contacto } from './components/contacto/contacto';

export const routes: Routes = [
    {path:'',component:Inicio},
    {path:'contacto',component:Contacto}
];
