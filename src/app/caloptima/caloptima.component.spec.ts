import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloptimaComponent } from './caloptima.component';

describe('CaloptimaComponent', () => {
  let component: CaloptimaComponent;
  let fixture: ComponentFixture<CaloptimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloptimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloptimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
