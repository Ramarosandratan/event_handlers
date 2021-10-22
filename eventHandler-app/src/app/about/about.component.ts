import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "Event Handler";

  events = [
    "Weeding",
    "Birthday",
    "Baptem",
    "Ceremony"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
