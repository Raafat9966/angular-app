import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ways-to-binding',
  templateUrl: './ways-to-binding.component.html',
  styleUrls: ['./ways-to-binding.component.css']
})
export class WaysToBindingComponent implements OnInit {
  public title: string = 'Hello';
  constructor() { }

  ngOnInit(): void {
  }

}
