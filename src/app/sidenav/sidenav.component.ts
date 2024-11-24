import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SidenavToggle
{
  screenwidth: number,
  collapsed: boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output () onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed = false;
  screenwidth = 0;
  navData = navbarData;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenwidth = window.innerWidth;
    if(this.screenwidth <= 768){
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
    }
  }

  ngOnInit(): void {
    // this.screenwidth = window.innerWidth;
  }

  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
  }
  closeSidenav() : void {
    this.collapsed = false
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
  }
}
