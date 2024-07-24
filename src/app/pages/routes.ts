import { Routes } from '@angular/router';
import { environment } from '../../environments/environment';

const routes: Routes = [
  {
    path: 'dashboard',
    title: `Dashboard - ${environment.APP_NAME}`,
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
  },
  {
    path: 'products',
    title: 'Products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashbaord',
  },
];

export default routes;
