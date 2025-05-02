import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdataComponent } from './bookingdata.component';

describe('BookingdataComponent', () => {
  let component: BookingdataComponent;
  let fixture: ComponentFixture<BookingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
