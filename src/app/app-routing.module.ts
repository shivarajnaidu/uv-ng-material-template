import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];
@NgModule({
  imports: [  RouterModule.forRoot(routes)  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

