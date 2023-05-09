import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { DvWrapperModule } from 'src/app/features/dv-wrapper/dv-wrapper.module';
import { DvButtonModule } from 'src/app/shared/components/dv-button/dv-button.module';



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    DvWrapperModule,
    DvButtonModule
  ]
})
export class ProjectCreateEditModule { }
