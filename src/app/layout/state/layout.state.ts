import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { MenuItem } from '../model/menu-item';
import {
  CollapseMenuItem,
  ToggleScreenMode,
  ToggleSidebar,
} from './toggle.actiom';

const defaultMenuItems: MenuItem[] = [
  { title: 'Dashboard', icon: 'bi bi-speedometer', route: '' },
  {
    title: 'Inventory',
    collapsed: true,
    subItems: [
      {
        title: 'Categories',
        icon: 'bi bi-bookmark',
        route: 'categories',
      },
      {
        title: 'Products',
        icon: 'bi bi-view-stacked',
        route: 'products',
      },
    ],
  },
];

export interface LayoutStateModel {
  menuItems: MenuItem[];
  sidebarOpened: boolean;
  mobile: boolean;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    menuItems: defaultMenuItems,
    sidebarOpened: true,
    mobile: false,
  },
})
@Injectable()
export class LayoutState {
  @Selector()
  static getMenuItems(state: LayoutStateModel): MenuItem[] {
    return state.menuItems;
  }

  @Selector()
  static isMobileDevice(state: LayoutStateModel): boolean {
    return state.mobile;
  }

  @Selector()
  static isSidebarOpened(state: LayoutStateModel): boolean {
    return state.sidebarOpened;
  }

  @Action(ToggleSidebar)
  toggleSidebar({ getState, patchState }: StateContext<LayoutStateModel>) {
    const state = getState();
    patchState({
      sidebarOpened: !state.sidebarOpened,
    });
  }

  @Action(ToggleScreenMode)
  toggleScreenMode(
    { patchState }: StateContext<LayoutStateModel>,
    { mobile }: ToggleScreenMode
  ) {
    patchState({
      mobile: mobile,
    });
  }

  @Action(CollapseMenuItem)
  collapseMenuItem(
    { patchState, getState }: StateContext<LayoutStateModel>,
    { item }: CollapseMenuItem
  ) {
    const menuItems = getState().menuItems;
    patchState({
      menuItems: updateItem<MenuItem>(
        i => i === item,
        patch({ collapsed: !(item.collapsed ?? false) })
      )(menuItems),
    });
  }
}
