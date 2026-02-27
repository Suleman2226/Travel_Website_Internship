import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelService } from '../../services/travel.service';
import { Tour } from '../../models/travel.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  tours: Tour[] = [];
  selectedTour: Tour | null = null;
  isSubmitting = false;
  isSuccess = false;
  bookingReference = '';
  minDate = '';

  indianDestinations = [
    'Jaipur, Rajasthan', 'Udaipur, Rajasthan', 'Jaisalmer, Rajasthan',
    'Goa', 'Kerala Backwaters', 'Munnar, Kerala', 'Kochi, Kerala',
    'Manali, Himachal Pradesh', 'Shimla, Himachal Pradesh',
    'Agra, Uttar Pradesh', 'Varanasi, Uttar Pradesh', 'Lucknow, Uttar Pradesh',
    'Darjeeling, West Bengal', 'Kolkata, West Bengal',
    'Rishikesh, Uttarakhand', 'Mussoorie, Uttarakhand',
    'Leh Ladakh, J&K', 'Andaman Islands', 'Ranthambore, Rajasthan',
  ];

  tourTypes = [
    'Heritage & Culture', 'Beach Holiday', 'Adventure & Trekking',
    'Wildlife Safari', 'Spiritual Journey', 'Honeymoon Special', 'Family Package',
  ];

  constructor(private fb: FormBuilder, private travelService: TravelService) {}

  ngOnInit(): void {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow.toISOString().split('T')[0];

    this.bookingForm = this.fb.group({
      firstName:       ['', [Validators.required, Validators.minLength(2)]],
      lastName:        ['', [Validators.required, Validators.minLength(2)]],
      email:           ['', [Validators.required, Validators.email]],
      phone:           ['', [Validators.required, Validators.pattern(/^[+\d\s\-()\u0966-\u096F]{7,}$/)]],
      destination:     ['', Validators.required],
      tourType:        ['', Validators.required],
      travelDate:      ['', Validators.required],
      numberOfPeople:  [1,  [Validators.required, Validators.min(1), Validators.max(20)]],
      specialRequests: [''],
    });

    this.travelService.getTours().subscribe(tours => {
      this.tours = tours;
      this.selectedTour = tours[1]; // Default: Classic Explorer
    });
  }

  get f() { return this.bookingForm.controls; }

  selectTour(tour: Tour): void {
    this.selectedTour = tour;
  }

  isInvalid(field: string): boolean {
    const c = this.bookingForm.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  get totalPrice(): number {
    if (!this.selectedTour) return 0;
    return this.selectedTour.pricePerPerson * (this.bookingForm.get('numberOfPeople')?.value || 1);
  }

  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.travelService.submitBooking({
      ...this.bookingForm.value,
      tourId: this.selectedTour?.id ?? 0,
    }).subscribe(res => {
      this.isSubmitting = false;
      if (res.success) {
        this.isSuccess = true;
        this.bookingReference = res.reference;
      }
    });
  }
}
