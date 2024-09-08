import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsEventCodeComponent } from './cmms-event-code.component';

describe('CmmsEventCodeComponent', () => {
  let component: CmmsEventCodeComponent;
  let fixture: ComponentFixture<CmmsEventCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsEventCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsEventCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
