import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeePlantCalendarComponent } from './oee-plant-calendar.component';

describe('OeePlantCalendarComponent', () => {
  let component: OeePlantCalendarComponent;
  let fixture: ComponentFixture<OeePlantCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeePlantCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeePlantCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
