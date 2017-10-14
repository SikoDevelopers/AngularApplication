import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFiltroComponent } from './select-filtro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectFiltroComponent],
  exports:[SelectFiltroComponent]
})
export class SelectFiltroModule { }
