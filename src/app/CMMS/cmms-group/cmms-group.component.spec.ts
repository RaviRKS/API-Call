import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmsGroupComponent } from './cmms-group.component';

describe('CmmsGroupComponent', () => {
  let component: CmmsGroupComponent;
  let fixture: ComponentFixture<CmmsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmmsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmmsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
