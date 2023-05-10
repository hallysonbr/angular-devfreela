import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { DvWrapperModule } from 'src/app/features/dv-wrapper/dv-wrapper.module';
import { DvButtonModule } from 'src/app/shared/components/dv-button/dv-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    DvWrapperModule,
    DvButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class ProjectCreateEditModule { }
