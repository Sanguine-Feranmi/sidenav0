import { Component } from '@angular/core';
// import { SidenavToggle } from './sidenav/sidenav.component';

interface SidenavToggle
{
  screenwidth: number,
  collapsed: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidenav0';
  isSideNavCollapsed = false;
  screenwidth = 0;
  onToggleSidenav(data: SidenavToggle ) : void{
    this.isSideNavCollapsed = data.collapsed;
    this.screenwidth = data.screenwidth;
  }
}
