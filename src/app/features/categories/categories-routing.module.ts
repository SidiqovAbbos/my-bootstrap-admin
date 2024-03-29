import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Route[] = [{ path: '', component: CategoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
