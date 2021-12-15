import { Component, OnInit } from '@angular/core';
import { ExtendedPoint, Point } from '../Point';
import { PointService } from '../point.service';
import { Input } from '@angular/core'; 

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

  @Input() set radius(num: number) {
    this.r = num;
    this.updateDpath();
  }

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
    for (let i = 30; i <= 270; i += 30) {
      this.dashes.push(i);
    }
    this.pointService.getPoints().subscribe(points => this.points = points);
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

  checkHit(event: MouseEvent) {
    let x = Number.parseFloat(((event.offsetX - 150 - 10) / 30).toFixed(2));
    let y = Number.parseFloat(((event.offsetY - 150 - 10) / -30).toFixed(2));
    if (x < -5 || x > 5 || y < -5 || y > 5) return;
    this.pointService.check({ x: x, y: y, radius: this.r} as ExtendedPoint);
  }
}
