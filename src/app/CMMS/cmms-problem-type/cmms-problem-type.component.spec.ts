import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsProblemTypeComponent } from './cmms-problem-type.component';

describe('CmmsProblemTypeComponent', () => {
  let component: CmmsProblemTypeComponent;
  let fixture: ComponentFixture<CmmsProblemTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsProblemTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsProblemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
