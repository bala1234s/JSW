import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  Menu: any;
  constructor() { }
  menu() { 
    
    this.Menu = document.getElementById('dropdown')?.style;
    
    if (this.Menu.display == "none") {
      this.Menu.display = "block";

    }
    else { 
      this.Menu.display = "none";
    }
  }
}
