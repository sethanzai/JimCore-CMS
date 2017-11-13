import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLineComponent } from './professional-line.component';

describe('ProfessionalLineComponent', () => {
  let component: ProfessionalLineComponent;
  let fixture: ComponentFixture<ProfessionalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
