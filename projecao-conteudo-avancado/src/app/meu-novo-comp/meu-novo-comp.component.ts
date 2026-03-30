import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-novo-comp',
  templateUrl: './meu-novo-comp.component.html',
  styleUrl: './meu-novo-comp.component.scss'
})
export class MeuNovoCompComponent implements OnInit {
  ngOnInit() {
    console.log('MeuNovoCompComponent OnInit')
  }
}
