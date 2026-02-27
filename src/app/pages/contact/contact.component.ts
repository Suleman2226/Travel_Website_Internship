import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  isSuccess = false;

  subjects = [
    'Tour Inquiry', 'Custom Itinerary Request', 'Booking Support',
    'Cancellation / Refund', 'Group Booking', 'General Question',
  ];

  officeInfo = [
    { icon: '📍', label: 'Head Office',  lines: ['GoBooking TravelTech Pvt.Ltd, 2nd Floor, GR Square Sector 75, SAS Nagar (Mohali), Punjab', 'INDIA – 140308'] },
    { icon: '📞', label: 'Toll Free',    lines: ['1800-123-4567 '] },
    { icon: '✉️', label: 'Email Us',     lines: [ 'support@gobooking.in'] },
  ];

  officeHours = [
    { day: 'Mon – Fri', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday',  time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday',    time: 'Closed' },
  ];

  constructor(private fb: FormBuilder, private travelService: TravelService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      phone:   [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isInvalid(field: string): boolean {
    const c = this.contactForm.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    this.travelService.submitContact(this.contactForm.value).subscribe(res => {
      this.isSubmitting = false;
      if (res.success) this.isSuccess = true;
    });
  }
}
