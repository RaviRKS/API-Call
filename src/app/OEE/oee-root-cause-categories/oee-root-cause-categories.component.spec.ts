import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeRootCauseCategoriesComponent } from './oee-root-cause-categories.component';

describe('OeeRootCauseCategoriesComponent', () => {
  let component: OeeRootCauseCategoriesComponent;
  let fixture: ComponentFixture<OeeRootCauseCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeeRootCauseCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeRootCauseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
