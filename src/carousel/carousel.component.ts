// Import Component form the angular core package
import {Component,Input} from 'angular2/core';

// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'carousel',
  //Template for the tag
  template: `
 <div class="carousel">

  <ul class="slides">

    <li *ngFor="#image of images">
      <img src="/assets/{{image}}" alt="...">
    </li>

  </ul>

</div>
  `,
  styles: [require('assets/css/carousel.css'),``]
})
//Carousel Component itself
export class CarouselComponent {
  //images data to be bound to the template
  @Input('images') images: string[];
}
