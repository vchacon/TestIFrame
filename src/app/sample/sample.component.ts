import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  private url: string;

  constructor() { }

  ngOnInit() {
    this.url = 'https://getbootstrap.com/';
  }

}
