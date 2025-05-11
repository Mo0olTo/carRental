import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDataInfoComponent } from './booking-data-info.component';

describe('BookingDataInfoComponent', () => {
  let component: BookingDataInfoComponent;
  let fixture: ComponentFixture<BookingDataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDataInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
