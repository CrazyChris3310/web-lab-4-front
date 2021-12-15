import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExtendedPoint } from './Point';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  points = [
    { x: 4, y: 3, hit: false, duration: '123 мс', date: '11.12.2021 11:08', radius: 4 },
    { x: 2, y: -1.48, hit: true, duration: '105 мс', date: '11.12.2021 11:010', radius: 3 },
    { x: -3, y: -4.1, hit: false, duration: '58 мс', date: '08.11.2021 11:08', radius: 2.5 },
  ]

  getPoints(): Observable<ExtendedPoint[]> {
    return of(this.points);
  }

  check(point: ExtendedPoint) {
    let temp = Math.random();
    let result = false;
    if (temp < 0.5)
      result = false;
    else
      result = true;

    point.hit = result;
    point.duration = Math.random() * 100 + "мс";
    point.date = "12.12.2012 16:33";
    this.points.unshift(point);

    console.log(this.points);
  }

  constructor() { }
}
