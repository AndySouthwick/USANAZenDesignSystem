import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroInfoComponent } from './intro-info.component';

describe('IntroInfoComponent', () => {
  let component: IntroInfoComponent;
  let fixture: ComponentFixture<IntroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
