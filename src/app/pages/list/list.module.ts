import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { DvWrapperModule } from 'src/app/features/dv-wrapper/dv-wrapper.module';
import { DvButtonModule } from 'src/app/shared/components/dv-button/dv-button.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    DvWrapperModule,
    DvButtonModule,
  ]
})
export class ListModule { }
