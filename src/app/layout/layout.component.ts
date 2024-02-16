import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuItem } from './model/menu-item';
import { LayoutState } from './state/layout.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Select(LayoutState.isSidebarOpened)
  sidebarOpened$!: Observable<boolean>;

  @Select(LayoutState.getMenuItems)
  menuItems$!: Observable<MenuItem[]>;

  constructor(private store: Store) {}
}
