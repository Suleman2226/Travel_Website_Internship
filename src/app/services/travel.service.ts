import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Destination, Tour, BookingRequest, ContactMessage } from '../models/travel.model';

@Injectable({ providedIn: 'root' })
export class TravelService {

  private destinations: Destination[] = [
    { id: 1,  name: 'Jaipur',            state: 'Rajasthan',          type: 'heritage',  image: 'assets/jaipur.png', bgGradient: 'linear-gradient(135deg,#7B1A00,#CC4400)', description: 'The Pink City — majestic palaces, vibrant bazaars, and centuries of glorious Rajput grandeur.', tags: ['Palaces', 'History', 'Culture'], priceFrom: 12999, rating: 4.9 },
    { id: 2,  name: 'Udaipur',           state: 'Rajasthan',          type: 'heritage',  image:  'assets/udaipur.png', bgGradient: 'linear-gradient(135deg,#5D1A00,#B44A20)', description: 'City of Lakes — shimmering lake palaces, romantic sunsets over Pichola, and vibrant Mewar art.', tags: ['Lakes', 'Romantic', 'Palaces'], priceFrom: 14999, rating: 4.9 },
    { id: 3,  name: 'Goa',               state: 'Goa',                type: 'beach',     image: 'assets/goa.jpg', bgGradient: 'linear-gradient(135deg,#003D5C,#006B96)', description: 'Golden beaches, Portuguese-era churches, fresh seafood, and vibrant nightlife in paradise.', tags: ['Beaches', 'Nightlife', 'Food'], priceFrom: 9999, rating: 4.8 },
    { id: 4,  name: 'Kerala Backwaters', state: 'Kerala',             type: 'nature',    image: 'assets/kerala.jpg', bgGradient: 'linear-gradient(135deg,#1A3D00,#357000)', description: 'Serene houseboat rides through emerald waterways lined with swaying coconut palms.', tags: ['Houseboat', 'Nature', 'Relaxation'], priceFrom: 14999, rating: 4.9 },
    { id: 5,  name: 'Manali',            state: 'Himachal Pradesh',   type: 'adventure', image: 'assets/manali.jpg', bgGradient: 'linear-gradient(135deg,#1A2A4A,#3A5A8A)', description: 'Snow-capped peaks, Rohtang Pass, white-water rafting, and thrilling adventure sports.', tags: ['Snow', 'Trekking', 'Adventure'], priceFrom: 11999, rating: 4.8 },
    { id: 6,  name: 'Sheesh Mahal',      state: 'Punjab',             type: 'heritage',  image: 'assets/mahal.png', bgGradient: 'linear-gradient(135deg,#4A1A00,#8A4A00)', description: 'The  India ', tags: ['Spiritual', 'Ghats', 'Culture'], priceFrom: 8999, rating: 4.7 },
    { id: 7,  name: 'Leh Ladakh',        state: 'Jammu & Kashmir',    type: 'adventure', image: 'assets/leh.png', bgGradient: 'linear-gradient(135deg,#2A1A4A,#5A3A8A)', description: 'Barren moonscapes, ancient Buddhist monasteries, Pangong Lake, and the world\'s highest roads.', tags: ['Adventure', 'Monasteries', 'Scenic'], priceFrom: 22999, rating: 4.9 },
    { id: 8,  name: 'Ranthambore',       state: 'Rajasthan',          type: 'wildlife',  image: 'assets/Ranthambore.png', bgGradient: 'linear-gradient(135deg,#2A3A1A,#4A6A2A)', description: 'India\'s most celebrated tiger reserve — witness Bengal tigers in their natural habitat.', tags: ['Tigers', 'Safari', 'Wildlife'], priceFrom: 16999, rating: 4.8 },
    { id: 9, name:  'Andaman Islands',   state: 'Andaman & Nicobar',  type: 'beach',     image: 'assets/AI.png', bgGradient: 'linear-gradient(135deg,#004A6A,#0090C0)', description: 'Crystal-clear lagoons, pristine coral reefs, white sand beaches, and vibrant marine life.', tags: ['Diving', 'Beach', 'Island'], priceFrom: 24999, rating: 4.9 },
    { id: 10, name: 'Darjeeling',        state: 'West Bengal',        type: 'nature',    image: 'assets/wb.png', bgGradient: 'linear-gradient(135deg,#1A3A1A,#2A6A2A)', description: 'Aromatic tea gardens, Himalayan Railway, sunrise over Kanchenjunga, and colonial charm.', tags: ['Tea', 'Mountains', 'Scenic'], priceFrom: 10999, rating: 4.7 },
    { id: 11, name: 'Agra',              state: 'Uttar Pradesh',      type: 'heritage',  image: 'assets/agra.png', bgGradient: 'linear-gradient(135deg,#3A2A1A,#6A5A3A)', description: 'Home of the Taj Mahal — one of the Seven Wonders and a UNESCO World Heritage marvel.', tags: ['Taj Mahal', 'UNESCO', 'History'], priceFrom: 8499, rating: 4.8 },
  ];

  private tours: Tour[] = [
    { id: 1, name: 'Weekend Getaway',   duration: '3 Days / 2 Nights',  pricePerPerson: 8999,  description: 'Perfect for short breaks',            includes: ['Hotel stay (2 nights)', 'Local transport', '1 guided city tour', 'Welcome kit'] },
    { id: 2, name: 'Classic Explorer',  duration: '7 Days / 6 Nights',  pricePerPerson: 15999, description: 'Most popular — comprehensive experience', includes: ['4-star hotels', 'Airport transfers', 'All guided tours', 'Daily breakfast & dinner'] },
    { id: 3, name: 'Premium Journey',   duration: '10 Days / 9 Nights', pricePerPerson: 27999, description: 'Luxury with exclusive experiences',       includes: ['5-star resorts', 'Private vehicle', 'Personal expert guide', 'All meals & activities'] },
    { id: 4, name: 'Backpacker Budget', duration: '7 Days / 6 Nights',  pricePerPerson: 6999,  description: 'Budget-friendly with local charm',       includes: ['Guesthouse stays', 'Local transport pass', 'Self-guided with maps', 'Breakfast only'] },
  ];

  getDestinations(): Observable<Destination[]> {
    return of(this.destinations).pipe(delay(300));
  }

  filterDestinations(type: string, query: string): Observable<Destination[]> {
    let list = [...this.destinations];
    if (type && type !== 'all') list = list.filter(d => d.type === type);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return of(list).pipe(delay(200));
  }

  getTours(): Observable<Tour[]> {
    return of(this.tours).pipe(delay(200));
  }

  submitBooking(req: BookingRequest): Observable<{ success: boolean; reference: string }> {
    console.log('[GoTravel] Booking submitted (mock):', req);
    const reference = 'GT' + Date.now().toString().slice(-7);
    return of({ success: true, reference }).pipe(delay(900));
  }

  submitContact(msg: ContactMessage): Observable<{ success: boolean }> {
    console.log('[GoTravel] Contact message (mock):', msg);
    return of({ success: true }).pipe(delay(600));
  }
}
