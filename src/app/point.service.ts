import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Point } from './Point';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  points = [
    { x: 123, y: 50, hit: false },
    { x: 45, y: 218, hit: true },
    { x: 222, y: 147, hit: false },
  ]

  getPoints(): Observable<Point[]> {
    return of(this.points);
  }

  constructor() { }
}
