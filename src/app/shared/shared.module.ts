import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


const components = [
  ButtonModule
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
