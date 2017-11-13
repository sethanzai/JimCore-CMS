import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialLineComponent } from './commercial-line.component';

describe('CommercialLineComponent', () => {
  let component: CommercialLineComponent;
  let fixture: ComponentFixture<CommercialLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
