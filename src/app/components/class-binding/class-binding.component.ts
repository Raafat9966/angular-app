import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
public name = 'Angular';
public successClass = 'text-success';
public hasError = true;
public messageClasses = {
  'text-success': !this.hasError,
  'text-danger': this.hasError,
  'text-special': this.hasError
};
  constructor() { }

  ngOnInit(): void {
  }

}
