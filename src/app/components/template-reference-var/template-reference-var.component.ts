import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-var',
  templateUrl: './template-reference-var.component.html',
  styleUrls: ['./template-reference-var.component.css']
})
export class TemplateReferenceVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onClick(value: any) {
  console.log(value);
}
}
