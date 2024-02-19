import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutState } from './state/layout.state';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgxsModule.forFeature([LayoutState]),
    LayoutRoutingModule,
  ],
})
export class LayoutModule {}
