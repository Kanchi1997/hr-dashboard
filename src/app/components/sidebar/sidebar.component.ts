import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeMenu = 'dashboard';

  setActive(menu: string) {
    this.activeMenu = menu;
  }
}
