import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  // MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [TopnavComponent],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    TopnavComponent,
  ]
})
export class TopnavModule { }
