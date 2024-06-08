import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    SidenavComponent,
    LayoutComponent,
    TopbarComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class LayoutModule { }
