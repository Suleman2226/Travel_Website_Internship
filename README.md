# Go Travel – Tourism Web Portal
**Angular 17 | India Destinations | Reactive Forms | Angular Services**

---

## 🚀 Getting Started

```bash
# 1. Install Angular CLI globally (if not installed)
npm install -g @angular/cli

# 2. Install project dependencies
npm install

# 3. Start development server
ng serve

# 4. Open browser
http://localhost:4200
```

---

## 📁 Project Structure

```
go-travel/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts       ← Fixed nav with scroll + mobile menu
│   │   │   │   ├── navbar.component.html
│   │   │   │   └── navbar.component.css
│   │   │   └── footer/
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.css
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts         ← Hero, search, features, testimonials
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   ├── destinations/
│   │   │   │   ├── destinations.component.ts ← Filter + live search
│   │   │   │   ├── destinations.component.html
│   │   │   │   └── destinations.component.css
│   │   │   ├── booking/
│   │   │   │   ├── booking.component.ts      ← Reactive form with full validation
│   │   │   │   ├── booking.component.html
│   │   │   │   └── booking.component.css
│   │   │   └── contact/
│   │   │       ├── contact.component.ts      ← Contact form with validation
│   │   │       ├── contact.component.html
│   │   │       └── contact.component.css
│   │   ├── services/
│   │   │   └── travel.service.ts             ← All mock data + Observable methods
│   │   ├── models/
│   │   │   └── travel.model.ts               ← TypeScript interfaces
│   │   ├── app-routing.module.ts             ← Route definitions
│   │   ├── app.module.ts                     ← Module declarations
│   │   └── app.component.html                ← Root component
│   ├── styles.css                            ← Global styles
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗺️ Pages & Features

| Page | Route | Features |
|------|-------|---------|
| **Home** | `/` | Hero banner, Quick search, Why Us cards, Featured destinations, Testimonials |
| **Destinations** | `/destinations` | 12 Indian destinations, Live search, 7 filter chips, Responsive cards |
| **Book a Tour** | `/booking` | 4 tour packages, Reactive form, Validation, Dynamic price summary |
| **Contact** | `/contact` | Office info, Reactive contact form, Validation |

---

## 🇮🇳 Indian Destinations Included

| Destination | State | Type |
|------------|-------|------|
| Jaipur | Rajasthan | Heritage |
| Udaipur | Rajasthan | Heritage |
| Goa | Goa | Beach |
| Kerala Backwaters | Kerala | Nature |
| Manali | Himachal Pradesh | Adventure |
| Varanasi | Uttar Pradesh | Spiritual |
| Leh Ladakh | Jammu & Kashmir | Adventure |
| Ranthambore | Rajasthan | Wildlife |
| Rishikesh | Uttarakhand | Spiritual |
| Andaman Islands | Andaman & Nicobar | Beach |
| Darjeeling | West Bengal | Nature |
| Agra | Uttar Pradesh | Heritage |

---

## 🔧 Angular Concepts Used

- **`RouterModule`** – `routerLink`, `routerLinkActive`, `ActivatedRoute` for navigation
- **`ReactiveFormsModule`** – `FormBuilder`, `FormGroup`, `Validators` (booking + contact)
- **`FormsModule`** – `[(ngModel)]` two-way binding for search inputs
- **`HttpClientModule`** – Ready for real API integration
- **`Injectable Service`** – `TravelService` with `Observable` + `delay()` simulating HTTP
- **`HostListener`** – Scroll detection in Navbar for shadow effect
- **Structural Directives** – `*ngFor`, `*ngIf` throughout all templates
- **Pipes** – `number`, `titlecase` in templates
- **Lifecycle Hooks** – `OnInit` for data fetching on component mount
- **Query Params** – Homepage search passes query to Destinations via `ActivatedRoute`

---

## ✅ Form Validation Rules

### Booking Form
| Field | Rules |
|-------|-------|
| First / Last Name | Required, min 2 chars |
| Email | Required, valid email format |
| Mobile | Required, min 7 digits |
| Destination | Required (dropdown) |
| Tour Type | Required (dropdown) |
| Travel Date | Required, must be future date |
| Travellers | Required, 1–20 |

### Contact Form
| Field | Rules |
|-------|-------|
| Name | Required, min 2 chars |
| Email | Required, valid format |
| Subject | Required (dropdown) |
| Message | Required, min 10 chars |

---

## 🔌 Connecting to a Real API

The `TravelService` uses mock data with `of()` from RxJS. To connect a real backend, simply replace:

```typescript
// Before (mock)
return of(this.destinations).pipe(delay(300));

// After (real API)
return this.http.get<Destination[]>('https://api.gotravel.in/destinations');
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| > 1100px | Full desktop layout |
| ≤ 1100px | 2-column grids |
| ≤ 768px | Single column, hamburger nav |
