import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/dashboard/dashboard.component').then(
            e => e.DashboardComponent
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../features/categories/categories.module').then(
            e => e.CategoriesModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../features/products/products.module').then(
            e => e.ProductsModule
          ),
      },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class LayoutRoutingModule {}
