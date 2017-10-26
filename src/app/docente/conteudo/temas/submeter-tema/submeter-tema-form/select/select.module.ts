import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {SelectService} from "./select.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectComponent],
  exports:[SelectComponent],
  providers:[SelectService]
})
export class SelectModule { }
