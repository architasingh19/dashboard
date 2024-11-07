import { Component } from '@angular/core';
import { sideBarNavBtn } from 'src/app/constant/sideBarIcons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarBtn = sideBarNavBtn
  constructor() {

  }

}
