import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  option = 1778;
  author = "Вахрушев Данил Сергеевич";
  group = "P3231";

  constructor() { }

  ngOnInit(): void {
  }

}
