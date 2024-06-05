import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidenavComponent,
    LayoutComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
