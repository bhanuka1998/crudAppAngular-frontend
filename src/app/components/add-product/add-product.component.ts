import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: any = {
    name: '',
    description: '',
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added successfully!');
      this.router.navigate(['/products']);
    });
  }
}
