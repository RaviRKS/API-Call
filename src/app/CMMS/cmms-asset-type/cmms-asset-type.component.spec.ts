import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsAssetTypeComponent } from './cmms-asset-type.component';

describe('CmmsAssetTypeComponent', () => {
  let component: CmmsAssetTypeComponent;
  let fixture: ComponentFixture<CmmsAssetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsAssetTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsAssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
