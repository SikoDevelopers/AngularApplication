import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaComponent, SidenavComponent]
})
export class EstudanteModule { }
