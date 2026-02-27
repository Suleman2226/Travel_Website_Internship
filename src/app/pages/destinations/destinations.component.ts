import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../../services/travel.service';
import { Destination } from '../../models/travel.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent implements OnInit {
  allDestinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  searchQuery = '';
  activeFilter = 'all';
  isLoading = true;

  filters = [
    { key: 'all',       label: 'All' },
    { key: 'heritage',  label: 'Heritage' },
    { key: 'beach',     label: 'Beach' },
    { key: 'adventure', label: 'Adventure' },
    { key: 'wildlife',  label: 'Wildlife' },
    { key: 'nature',    label: 'Nature' },
  ];

  constructor(private travelService: TravelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.travelService.getDestinations().subscribe(data => {
      this.allDestinations = data;
      this.isLoading = false;
      this.route.queryParams.subscribe(params => {
        if (params['q']) this.searchQuery = params['q'];
        this.applyFilters();
      });
    });
  }

  applyFilters(): void {
    let list = [...this.allDestinations];
    if (this.activeFilter !== 'all') {
      list = list.filter(d => d.type === this.activeFilter);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    this.filteredDestinations = list;
  }

  setFilter(key: string): void {
    this.activeFilter = key;
    this.applyFilters();
  }

  clearFilters(): void {
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.applyFilters();
  }

  onImgError(event: Event, gradient: string): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}