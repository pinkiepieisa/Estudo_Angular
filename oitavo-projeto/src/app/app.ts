import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('oitavo-projeto');
  fontSize: number = 30;
  textColor: 'white' | 'pink' = 'pink';
  buttonText: 'Branco' | 'Rosa'= 'Branco';
  stylesString: string = 'fonte-size: 40px; color: pink';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  }

  increaseFontSize() {
    this.fontSize += 10;

    this.stylesString = `font-size ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
    }
  }

  decreaseFontSize() {
    this.fontSize -= 10;

    this.stylesString = `font-size ${this.fontSize}px; color: ${this.textColor};`;
  }

  toggleFontColor() {
    if(this.textColor === 'white') {
      this.textColor = 'pink';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Rosa';
    }

    this.stylesString = `font-size ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
    }
  }
}
