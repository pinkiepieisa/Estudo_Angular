import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('quinto-projeto');
  name: string = 'Isabela';

  handleInputChange(event: string) {
    console.log(event);

    this.name = event;
  }

}
