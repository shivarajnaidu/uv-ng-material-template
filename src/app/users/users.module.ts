import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent
  ]
})
export class UsersModule { }
