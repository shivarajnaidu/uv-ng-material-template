import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

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
