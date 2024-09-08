import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeTagMappingComponent } from './oee-tag-mapping.component';

describe('OeeTagMappingComponent', () => {
  let component: OeeTagMappingComponent;
  let fixture: ComponentFixture<OeeTagMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OeeTagMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeTagMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
