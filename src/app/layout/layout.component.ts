import { Component, ElementRef, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, combineLatest, map } from 'rxjs';
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

  sidebarAndNotMobile$: Observable<boolean>;

  constructor(
    private elementRef: ElementRef,
    private store: Store
  ) {
    this.sidebarAndNotMobile$ = combineLatest([
      this.sidebarOpened$,
      this.isMobileDevice$,
    ]).pipe(
      map(([sidebarOpened, isMobileDevice]) => sidebarOpened && !isMobileDevice)
    );
  }

  ngOnInit(): void {
    const screenWidth = this.elementRef.nativeElement.offsetWidth;
    const isMobileDevice = screenWidth < 820;
    if (isMobileDevice) {
      this.store.dispatch(new ToggleSidebar());
    }
    this.store.dispatch(new ToggleScreenMode(isMobileDevice));
  }
}
