import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  mobileOpen = false;

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 40; }

  toggle() { this.mobileOpen = !this.mobileOpen; }
  close()  { this.mobileOpen = false; }
}
