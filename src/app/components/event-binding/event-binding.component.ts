import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    this.message = event.type;
    console.log(event.target);
  }

}
