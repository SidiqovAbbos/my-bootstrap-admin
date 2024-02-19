import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { LayoutState } from '../state/layout.state';
import { CollapseMenuItem, ToggleSidebar } from '../state/toggle.actiom';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Select(LayoutState.isSidebarOpened) opened$!: Observable<boolean>;
  @Select(LayoutState.getMenuItems) menuItems$!: Observable<MenuItem[]>;

  @Input() overlay?: boolean;

  constructor(private store: Store) {}

  onCollapseMenuItem(item: MenuItem) {
    this.store.dispatch(new CollapseMenuItem(item));
  }

  onOverlayClick() {
    this.store.dispatch(new ToggleSidebar());
  }
}
