import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caloptima',
  templateUrl: './caloptima.component.html',
  styleUrls: ['./caloptima.component.css']
})
export class CaloptimaComponent implements OnInit {
  private url: string;

  constructor() { }

  ngOnInit() {
    this.url = 'https://caloptima.org/';
  }

}
