import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
public name = 'Angular';
public isDisabled = true;
public userId = 2
  constructor() { }

  ngOnInit(): void {
  }

}
