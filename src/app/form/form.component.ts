import { Component, OnInit } from '@angular/core';
import { Point } from '../Point';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  range = [ '-3', '-2', '-1', '0', '1', '2', '3', '4', '5' ];

  xCord = ''
  yCord = ''
  radius = ''

  @Output() onRadiusChange = new EventEmitter<string>()

  onChange() {
    if (this.radius === '') return;
    this.onRadiusChange.emit(this.radius);
  }

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.xCord = "";
    this.yCord = "";
    this.radius = "";
  }

}
