import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExtendedPoint } from './Point';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  points = [
    { x: 123, y: 50, hit: false, duration: '123 мс', date: '11.12.2021 11:08', radius: 4 },
    { x: 45, y: 218, hit: true, duration: '105 мс', date: '11.12.2021 11:010', radius: 3 },
    { x: 222, y: 147, hit: false, duration: '58 мс', date: '08.11.2021 11:08', radius: 2.5 },
  ]

  getPoints(): Observable<ExtendedPoint[]> {
    return of(this.points);
  }

  constructor() { }
}
