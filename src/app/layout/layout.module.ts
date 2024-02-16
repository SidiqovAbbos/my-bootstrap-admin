import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutComponent } from "./layout.component";
import { NgxsModule } from "@ngxs/store";
import { LayoutState } from "./state/layout.state";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [HeaderComponent, SidebarComponent, LayoutComponent],
    imports: [CommonModule, NgbDropdownModule, NgxsModule.forFeature([LayoutState]), RouterModule.forChild([{path: '', component: LayoutComponent}])]
})
export class LayoutModule {}