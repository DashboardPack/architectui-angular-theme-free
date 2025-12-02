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

  startLoading() {
    this.progress.set(0); // starts spinner

    setTimeout(() => {
      this.progress.set(0.5); // sets progress bar to 50%

      setTimeout(() => {
        this.progress.set(1); // sets progress bar to 100%

        setTimeout(() => {
          this.progress.set(false); // stops spinner
        }, 200);
      }, 500);
    }, 400);
  }
}
