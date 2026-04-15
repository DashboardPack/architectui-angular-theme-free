import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  standalone: false,
  styles: []
})
export class StandardComponent {

  heading = 'Standard Buttons';
  subheading = 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  // Use signal for zoneless change detection
  progress = signal<boolean | number>(false);

  model = {
    left: true,
    middle: false,
    right: false
  };

  async startLoading() {
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    this.progress.set(0);
    await wait(400);
    this.progress.set(0.5);
    await wait(500);
    this.progress.set(1);
    await wait(200);
    this.progress.set(false);
  }
}
