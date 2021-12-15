import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
public hasError = true;
public highlightColor = 'orange';
public titleStyles = {
  color: 'blue',
  fontStyle: 'italic'
};

  constructor() { }

  ngOnInit(): void {
  }

}
