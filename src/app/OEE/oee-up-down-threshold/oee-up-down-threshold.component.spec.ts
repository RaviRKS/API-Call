import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeUpDownThresholdComponent } from './oee-up-down-threshold.component';

describe('OeeUpDownThresholdComponent', () => {
  let component: OeeUpDownThresholdComponent;
  let fixture: ComponentFixture<OeeUpDownThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeeUpDownThresholdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeUpDownThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
