import { Component, OnInit } from '@angular/core';
import { ExtendedPoint, Point } from '../Point';
import { Output, EventEmitter } from '@angular/core';
import { PointService } from '../point.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  range = [ '-3', '-2', '-1', '0', '1', '2', '3', '4', '5' ];

  xCord = '';
  yCord = '';
  radius = '';

  radiusErrorMessage = 'Радиус не указан';
  xCordErrorMessage = 'Координата X не указана';
  yCordErrorMessage = 'Координата Y не указана';

  @Output() onRadiusChange = new EventEmitter<number>()

  constructor(private pointService: PointService, private messageService: MessageService) { }

  changeRadius() {
    if (this.radius === '') return;
    let numRad = Number.parseInt(this.radius);
    if (numRad < 0) {
      this.messageService.add({severity: 'error', summary: "Error", detail: "Радиус не может быть отрицательным"});
      return;
    }
    this.onRadiusChange.emit(numRad);
  }

  check() {
    if (this.xCord === '') 
      this.messageService.add({ severity: 'error', summary: "Error", detail: this.xCordErrorMessage});
    if (this.yCord === '')
      this.messageService.add({ severity: 'error', summary: "Error", detail: this.yCordErrorMessage});
    if (this.radius === '')
      this.messageService.add({ severity: 'error', summary: "Error", detail: this.radiusErrorMessage});
    
    if (!this.xCord || !this.yCord || !this.radius)
      return;

    if (Number.parseInt(this.radius) < 0) {
      this.messageService.add({severity: 'error', summary: "Error", detail: "Радиус не может быть отрицательным", life: 2000});
      return;
    }

    let point = { 
      x: Number.parseInt(this.xCord),
      y: Number.parseFloat(this.yCord),
      radius: Number.parseInt(this.radius)
    };
    this.pointService.check(point as ExtendedPoint);
  }

  ngOnInit(): void {
  }

  clear() {
    this.xCord = "";
    this.yCord = "";
    this.radius = "";
    this.messageService.clear();
  }

}
