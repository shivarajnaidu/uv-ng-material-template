import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell.component';
import { RouterModule } from '@angular/router';
import { TopnavModule } from '../topnav/topnav.module';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

const materialModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
];



@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    TopnavModule,
    ...materialModules,
  ],
  exports: [
    AppShellComponent,
  ]
})
export class AppShellModule { }
