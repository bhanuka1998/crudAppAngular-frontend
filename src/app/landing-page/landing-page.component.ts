import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/add-product']);
  }
}
