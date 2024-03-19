import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  home_images: any; 
  images: any;
  image: any;
  index: any;
  imageStyle: any;


  constructor() { 
    this.home_images = ['../../assets/home/jsw-home.jpg', '../../assets/home/jsw-home-2.jpg', '../../assets/home/jsw-home-3.jpg'];
    this.index = 0;

    setInterval(() => {
      this.index++;
      this.images = document.getElementById('image')
      this.images.src = this.home_images[this.index];
      if (this.index == 2) { 
        this.index = -1;
      }

      

      
    }, 3000)


  }
  

  back() { 
 
    this.index++;

    this.images = document.getElementById('image');
    // this.imageStyle = document.getElementById('img')?.style;
    // this.imageStyle.marginTop = `${100}px`;
    
    this.images.src = this.home_images[this.index];
    if (this.index == 2) { 
      this.index = -1;
    }

    
    


    

  }
  forward() { 
 
    this.index++;

    this.images = document.getElementById('image')
    this.images.src = this.home_images[this.index];
    if (this.index == 2) { 
      this.index = -1;
    }
    


    

  }

  


}
