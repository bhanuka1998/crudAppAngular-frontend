import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  navigateToUpdate(id: number): void {
    this.router.navigate(['/update-product', id]);
  }

  confirmDelete(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
        alert('Product deleted successfully!');
      });
    }
  }
}
