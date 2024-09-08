import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsProblemCategoryComponent } from './cmms-problem-category.component';

describe('CmmsProblemCategoryComponent', () => {
  let component: CmmsProblemCategoryComponent;
  let fixture: ComponentFixture<CmmsProblemCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsProblemCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsProblemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
