import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandVoiceComponent } from './brand-voice.component';

describe('BrandVoiceComponent', () => {
  let component: BrandVoiceComponent;
  let fixture: ComponentFixture<BrandVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
