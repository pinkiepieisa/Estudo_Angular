import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.scss'
})
export class SubmitComponent {
  inputText: string = 'Texto inicial!';
  textarea: string = 'Descrição inicial!';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = true;

  onSubmit(form: NgForm) {
    console.log('onSubmit', form.value);

    // form.value['nome'] = 'Texto Alterado!';

    // console.log(this.inputText);
  }

  onReset(form: NgForm) {
    console.log('onReset', form.value);

    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.select);

    setTimeout(() => console.log(form.value), 1000);

    form.reset();
  }
}
