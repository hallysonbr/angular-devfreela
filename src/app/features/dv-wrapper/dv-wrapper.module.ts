import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvWrapperComponent } from './dv-wrapper.component';
import { DvHeaderModule } from '../dv-header/dv-header.module';



@NgModule({
  declarations: [
    DvWrapperComponent
  ],
  imports: [
    CommonModule,
    DvHeaderModule
  ],
  exports: [
    DvWrapperComponent
  ]
})
export class DvWrapperModule { }
