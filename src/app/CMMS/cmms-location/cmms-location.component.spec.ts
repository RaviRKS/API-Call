import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsLocationComponent } from './cmms-location.component';

describe('CmmsLocationComponent', () => {
  let component: CmmsLocationComponent;
  let fixture: ComponentFixture<CmmsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
