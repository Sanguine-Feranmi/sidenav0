import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
RouterOutlet

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenwidth = 0;

  getBodyClass() : string{
    let styleClass = '';
    if(this.collapsed && this.screenwidth < 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0){
      styleClass = 	'body-md-screen'
    }
    return styleClass;
  }
}
