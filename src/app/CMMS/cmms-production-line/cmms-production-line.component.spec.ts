import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsProductionLineComponent } from './cmms-production-line.component';

describe('CmmsProductionLineComponent', () => {
  let component: CmmsProductionLineComponent;
  let fixture: ComponentFixture<CmmsProductionLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsProductionLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsProductionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
