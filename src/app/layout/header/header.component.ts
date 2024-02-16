import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSidebar } from '../state/toggle.actiom';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public store: Store) {}

  onToggleClick() {
    this.store.dispatch(new ToggleSidebar());
  }
}
