import { Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'signup',
    title: 'Sign Up',
    loadComponent: () => import('./pages/auth/signup/signup.component').then(m => m.SignupComponent),
  },
  {
    path: 'forgot-password',
    title: 'Forget Password',
    loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component')
      .then(m => m.ForgotPasswordComponent),
  },
  {
    path: '',
    component: AppShellComponent,
    loadChildren: () => import('./pages/routes'),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }
];
