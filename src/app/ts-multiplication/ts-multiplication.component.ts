import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-multiplication',
  templateUrl: './ts-multiplication.component.html',
  styleUrls: ['./ts-multiplication.component.css']
})
export class TsMultiplicationComponent implements OnInit {
  numberOne = 2;
  numberTwo = 2;
  answer = 4;
  multiplyNumbers = () => {
    this.answer = this.numberOne * this.numberTwo;
  }
  constructor() { }

  ngOnInit() {
  }

}
