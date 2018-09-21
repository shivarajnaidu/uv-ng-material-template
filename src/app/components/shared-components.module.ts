import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components/mat-components.module';

import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightBandComponent } from './copyright-band/copyright-band.component';
import { RouterModule } from '@angular/router';

const declarations = [
  NavbarTopComponent,
  FooterComponent,
  CopyrightBandComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatComponentsModule
  ],
  declarations: [...declarations],
  exports: [...declarations],
})
export class SharedComponentsModule { }
