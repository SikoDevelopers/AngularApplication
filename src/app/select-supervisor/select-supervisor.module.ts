import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSupervisorComponent } from './select-supervisor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectSupervisorComponent],
    exports:[SelectSupervisorComponent],
})
export class SelectSupervisorModule { }
