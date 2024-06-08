import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  value!:string
  opened:boolean = false
  imgToShow= "../../../../assets/person/image.png"
  @Output() openedMenu = new EventEmitter<boolean>(false);

  changeMenu(event:any){
    this.opened = !this.opened;
    this.openedMenu.emit(!this.opened)    
  }

}
