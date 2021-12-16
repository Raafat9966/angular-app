import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  public title: string = 'Component Interaction....';
  public message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
