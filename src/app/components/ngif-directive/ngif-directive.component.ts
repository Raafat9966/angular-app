import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {
display : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
