import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsProblemComponent } from './cmms-problem.component';

describe('CmmsProblemComponent', () => {
  let component: CmmsProblemComponent;
  let fixture: ComponentFixture<CmmsProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
