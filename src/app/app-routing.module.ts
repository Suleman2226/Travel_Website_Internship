import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'booking',      component: BookingComponent },
  { path: 'contact',      component: ContactComponent },
  { path: '**',           redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
