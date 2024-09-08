import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsDepartmentComponent } from './cmms-department.component';

describe('CmmsDepartmentComponent', () => {
  let component: CmmsDepartmentComponent;
  let fixture: ComponentFixture<CmmsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
