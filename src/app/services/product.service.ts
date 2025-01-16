import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://35.86.111.124:8080/products/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
