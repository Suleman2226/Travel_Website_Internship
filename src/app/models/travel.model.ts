export interface Destination {
  id: number;
  name: string;
  state: string;
  type: 'beach' | 'adventure' | 'cultural' | 'wildlife' | 'nature' | 'heritage';
  image: string;
  bgGradient: string;
  description: string;
  tags: string[];
  priceFrom: number;
  rating: number;
}

export interface Tour {
  id: number;
  name: string;
  duration: string;
  pricePerPerson: number;
  description: string;
  includes: string[];
}

export interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  tourType: string;
  travelDate: string;
  numberOfPeople: number;
  specialRequests: string;
  tourId: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
