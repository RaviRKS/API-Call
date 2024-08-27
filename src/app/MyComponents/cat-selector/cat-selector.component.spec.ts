import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSelectorComponent } from './cat-selector.component';

describe('CatSelectorComponent', () => {
  let component: CatSelectorComponent;
  let fixture: ComponentFixture<CatSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
