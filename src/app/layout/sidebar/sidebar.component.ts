import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { LayoutState } from '../state/layout.state';
import { CollapseMenuItem } from '../state/toggle.actiom';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Select(LayoutState.isSidebarOpened) opened$!: Observable<boolean>;
  @Select(LayoutState.getMenuItems) menuItems$!: Observable<MenuItem[]>;

  constructor(private store: Store) {}

  onCollapseMenuItem(item: MenuItem) {
    this.store.dispatch(new CollapseMenuItem(item));
  }
}
