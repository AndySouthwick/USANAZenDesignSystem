import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuesComponent } from './navigation-menues.component';

describe('NavigationMenuesComponent', () => {
  let component: NavigationMenuesComponent;
  let fixture: ComponentFixture<NavigationMenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
