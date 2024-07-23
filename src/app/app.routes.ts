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
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent),
      },
      {
        path: 'products',
        title: 'Products',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/dashbaord',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }
];
