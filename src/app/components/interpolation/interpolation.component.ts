import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public name = 'John Doe';
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }
}
