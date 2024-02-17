import { Component, ElementRef, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MenuItem } from './model/menu-item';
import { LayoutState } from './state/layout.state';
import { ToggleScreenMode, ToggleSidebar } from './state/toggle.actiom';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  @Select(LayoutState.isSidebarOpened)
  sidebarOpened$!: Observable<boolean>;

  @Select(LayoutState.isMobileDevice)
  isMobileDevice$!: Observable<boolean>;

  @Select(LayoutState.getMenuItems)
  menuItems$!: Observable<MenuItem[]>;

  constructor(
    private elementRef: ElementRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    const screenWidth = this.elementRef.nativeElement.offsetWidth;
    this.store.dispatch(new ToggleScreenMode(screenWidth < 820));
  }

  onOverlayClick() {
    this.store.dispatch(new ToggleSidebar());
  }
}
