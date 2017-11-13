import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLineComponent } from './personal-line.component';

describe('PersonalLineComponent', () => {
  let component: PersonalLineComponent;
  let fixture: ComponentFixture<PersonalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
