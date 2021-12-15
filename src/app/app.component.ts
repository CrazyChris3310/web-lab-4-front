import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  radius = 0;

  updateRadius(newRad: string) {
    this.radius = Number.parseInt(newRad);
  }
}
