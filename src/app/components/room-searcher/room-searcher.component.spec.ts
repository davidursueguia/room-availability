import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSearcherComponent } from './room-searcher.component';

describe('RoomSearcherComponent', () => {
  let component: RoomSearcherComponent;
  let fixture: ComponentFixture<RoomSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
