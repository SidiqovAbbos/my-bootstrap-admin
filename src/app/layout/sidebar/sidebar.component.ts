import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LayoutState } from '../state/layout.state';
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Select(LayoutState.isSidebarOpened) opened$!: Observable<boolean>;
  @Select(LayoutState.getMenuItems) menuItems$!: Observable<MenuItem[]>;
}
