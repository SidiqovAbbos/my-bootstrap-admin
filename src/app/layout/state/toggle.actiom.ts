import { MenuItem } from '../model/menu-item';

export class ToggleSidebar {
  static readonly type = '[Layout] Toggle Sidebar';
  constructor() {}
}

export class ToggleScreenMode {
  static readonly type = '[Layout] Toggle Screen Mode';
  constructor(public mobile: boolean) {}
}

export class CollapseMenuItem {
  static readonly type = '[Layout] Collapse Menu Item';
  constructor(public item: MenuItem) {}
}
