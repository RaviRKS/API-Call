import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeShiftComponent } from './oee-shift.component';

describe('OeeShiftComponent', () => {
  let component: OeeShiftComponent;
  let fixture: ComponentFixture<OeeShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeeShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
