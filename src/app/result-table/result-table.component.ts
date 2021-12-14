import { Component, OnInit } from '@angular/core';
import { ExtendedPoint } from '../Point';
import { PointService } from '../point.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  isEmpty = false;
  points: ExtendedPoint[] = []

  constructor(private pointService: PointService ) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    this.pointService.getPoints().subscribe(points => this.points = points);
  }

}
