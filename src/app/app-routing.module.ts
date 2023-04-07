import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell/app-shell.component';


const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'signup',
    title: 'Sign Up',
    loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule),
  },
  {
    path: 'forgot-password',
    title: 'Forget Password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module')
      .then(m => m.ForgotPasswordModule),
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'users',
        title: 'Users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'products',
        title: 'Products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
