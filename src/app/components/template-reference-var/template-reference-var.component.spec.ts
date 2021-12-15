import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVarComponent } from './template-reference-var.component';

describe('TemplateReferenceVarComponent', () => {
  let component: TemplateReferenceVarComponent;
  let fixture: ComponentFixture<TemplateReferenceVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
