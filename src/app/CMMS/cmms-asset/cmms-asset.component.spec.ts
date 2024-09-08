import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsAssetComponent } from './cmms-asset.component';

describe('CmmsAssetComponent', () => {
  let component: CmmsAssetComponent;
  let fixture: ComponentFixture<CmmsAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
