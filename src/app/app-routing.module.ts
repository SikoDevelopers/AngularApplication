import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes} from "@angular/router";
import {PaginaInicialComponent} from './publico-geral/pagina-inicial/pagina-inicial.component';
const appRoutes: Routes = [
  {path: '',component: PaginaInicialComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
