import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeRootCauseComponent } from './oee-root-cause.component';

describe('OeeRootCauseComponent', () => {
  let component: OeeRootCauseComponent;
  let fixture: ComponentFixture<OeeRootCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeeRootCauseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeRootCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
