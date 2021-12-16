import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input('parentData') public title: String = '';
  @Output() public childEvent = new EventEmitter();
  public childData: any;
  constructor() { }

  ngOnInit(): void {

  }

  fireEvent() {
    this.childEvent.emit(this.childData);
  }
}
