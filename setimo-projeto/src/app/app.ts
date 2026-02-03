import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('setimo-projeto');

  personSelectedIndex: number | undefined;
  
  listPeople = [
    {name: 'Felipe Freitas', age: 26}, 
    {name: 'Isabela Dantas', age: 22}, 
    {name: 'Jorginho Carvalho', age: 55}, 
    {name: 'Mariazinha', age: 18}
  ]

  selectPerson(index: number){
    this.personSelectedIndex = index;
  }

}
