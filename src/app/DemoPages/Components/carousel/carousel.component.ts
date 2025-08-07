import {Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: false
})
export class CarouselComponent {

  heading = 'Carousels & Slideshows';
  subheading = 'Create easy and beautiful slideshows with these Angular NgBootstrap components.';
  icon = 'pe-7s-album icon-gradient bg-sunny-morning';

  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() {
    // Generate unique images for each carousel instance
    this.generateUniqueImages();
  }

  private generateUniqueImages(): void {
    const timestamp = Date.now();
    this.images = [
      `https://picsum.photos/900/500?random&t=${timestamp}_1`,
      `https://picsum.photos/900/500?random&t=${timestamp}_2`, 
      `https://picsum.photos/900/500?random&t=${timestamp}_3`,
      `https://picsum.photos/900/500?random&t=${timestamp}_4`,
      `https://picsum.photos/900/500?random&t=${timestamp}_5`
    ];
  }

}
