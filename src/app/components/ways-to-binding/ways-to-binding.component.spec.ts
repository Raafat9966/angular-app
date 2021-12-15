import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToBindingComponent } from './ways-to-binding.component';

describe('WaysToBindingComponent', () => {
  let component: WaysToBindingComponent;
  let fixture: ComponentFixture<WaysToBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaysToBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysToBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
