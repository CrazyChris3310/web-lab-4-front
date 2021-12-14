import { Component, OnInit } from '@angular/core';
import { Point } from '../Point';
import { PointService } from '../point.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  readonly dashes = Array<number>();
  r = 0;
  Dpath = "";
  points: Point[] = [];

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
    for (let i = 30; i <= 270; i += 30) {
      this.dashes.push(i);
    }
    this.r = 4;
    this.updateDpath();
    this.pointService.getPoints().subscribe(points => this.points = points);
  }

  setRadius(radius: number) {
    this.r = radius;
  }

  updateDpath() {
    this.Dpath = `M 150 ${150 - this.r * 15}
                  L ${150 + this.r * 15} 150
                  L 150 150
                  L 150 ${150 + this.r * 30}
                  L ${150 - this.r * 30} ${150 + this.r * 30}
                  L ${150 - this.r * 30} 150
                  L ${150 - this.r * 15} 150
                  A ${this.r * 15} ${this.r * 15} 0 0 1 150 ${150 - this.r * 15}`
  }

  checkHit(event: Event) {
   // TODO: Implement this method; 
  }

  

}
