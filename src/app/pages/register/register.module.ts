import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DvHeaderModule } from 'src/app/features/dv-header/dv-header.module';
import { DvButtonComponent } from 'src/app/shared/components/dv-button/dv-button.component';
import { DvButtonModule } from 'src/app/shared/components/dv-button/dv-button.module';
import { DvWrapperModule } from 'src/app/features/dv-wrapper/dv-wrapper.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DvButtonModule,
    DvWrapperModule
  ]
})
export class RegisterModule { }
