import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  Menu: any;
  checkIn: boolean = true;
  checkOut: boolean = false;

  constructor(private route: Router) {
    if (sessionStorage.getItem('loginAdmin') || sessionStorage.getItem('loginEmp')) {
      this.checkIn = false;
      this.checkOut = true;

    }
    else { 
      this.checkIn = true;
      this.checkOut = false;
    }
   }
  menu() { 
    
    this.Menu = document.getElementById('dropdown')?.style;
    
    if (this.Menu.display == "none") {
      this.Menu.display = "block";

    }
    else { 
      this.Menu.display = "none";
    }
  }

  login() { 

    this.route.navigate(['/login']);
  }
  logout() { 
    if (confirm("Are you sure to logout?")) { 
      sessionStorage.removeItem('loginAdmin');
      sessionStorage.removeItem('loginEmp');
      this.checkIn = true;
      this.checkOut = false;

      this.route.navigate(['']).then(() => { 
        window.location.reload();
      })



    }

  }
}
