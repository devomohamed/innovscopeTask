import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup'
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';


const components = [
  ButtonModule,
  InputTextModule,
  BadgeModule,
  MenuModule,
  SelectButtonModule,
  AvatarModule,
  AvatarGroupModule,
  ToastModule,
  CarouselModule,
  ChipModule,
  DividerModule,
  CardModule,
  ChartModule,
  TabViewModule,
  ProgressBarModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],exports:[
    components
  ]
})
export class SharedModule { }
