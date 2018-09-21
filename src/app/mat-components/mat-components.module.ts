import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

const matComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
];


@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class MatComponentsModule { }
