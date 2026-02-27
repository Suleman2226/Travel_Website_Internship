import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from '../../services/travel.service';
import { Destination } from '../../models/travel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredDestinations: Destination[] = [];
  searchQuery = '';
  selectedDate = '';
  selectedPax = '2 People';
  selectedType = 'All Types';

  stats = [
    { num: '200+', label: 'Destinations' },
    { num: '50K+', label: 'Travellers' },
    { num: '4.9★', label: 'Rating' },
    
  ];

  features = [
  { image: 'assets/guide.png',   title: 'Expert Local Guides',    desc: 'Certified guides with deep knowledge of every Indian state, culture, and hidden gem.' },
  { image: 'assets/safe.png',  title: 'Safe & Insured',         desc: 'Full travel insurance, 24/7 helpline, and government-approved vehicles on every tour.' },
  { image: 'assets/price.png',    title: 'Best Price Guarantee',   desc: 'Competitive rates, no hidden fees. We match any lower price you find, guaranteed.' },
  { image: 'assets/custom.png',   title: 'Custom Itineraries',     desc: 'Every tour tailored to your interests, timeline, and budget — nothing off-the-shelf.' },
];

  testimonials = [
    { initials: 'P', name: 'Priya Sharma',  city: 'Mumbai, Maharashtra', text: 'The Rajasthan Golden Triangle was flawlessly organised. Our guide Ramesh was incredibly knowledgeable. Best trip of my life!' },
    { initials: 'A', name: 'Arjun Mehta',   city: 'Mohali, Punjab', text: 'Kerala backwaters houseboat was magical. GoBooking handled every detail perfectly — from airport pickup to the farewell dinner.' },
    { initials: 'S', name: 'Sunita Reddy',  city: 'Hyderabad, Telangana', text: 'Booked a family trip to Manali. Kids loved every moment. Accommodation was top-notch and the itinerary was perfectly paced.' },
    { initials: 'P', name: 'Rohan Sharma',  city: 'Ahmedabad, Gujrat', text: 'The Ladakh travel packages were affordable and well-curated. Customer support was also very helpful. Thank you GoBooking!' },
    { initials: 'P', name: 'Raman Kaur',  city:   'Chandigarh, Punjab', text: 'I planned our Kerala vacation through GoBooking. Everything from flights to hotels was perfectly organized. Great experience!' },
  ];

  constructor(private travelService: TravelService, private router: Router) {}

  ngOnInit(): void {
    this.travelService.getDestinations().subscribe(d => {
      this.featuredDestinations = d.slice(0, 3);
    });
  }

  onSearch(): void {
    this.router.navigate(['/destinations'], { queryParams: { q: this.searchQuery } });
  }
}
