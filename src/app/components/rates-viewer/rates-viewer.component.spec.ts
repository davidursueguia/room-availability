import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesViewerComponent } from './rates-viewer.component';

describe('RatesViewerComponent', () => {
  let component: RatesViewerComponent;
  let fixture: ComponentFixture<RatesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
