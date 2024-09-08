import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsAssetMappingComponent } from './cmms-asset-mapping.component';

describe('CmmsAssetMappingComponent', () => {
  let component: CmmsAssetMappingComponent;
  let fixture: ComponentFixture<CmmsAssetMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsAssetMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsAssetMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
