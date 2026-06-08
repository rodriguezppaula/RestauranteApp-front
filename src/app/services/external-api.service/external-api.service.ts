import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExternalProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  available?: boolean;
}

export interface ExternalCategory {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class ExternalApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://devsapihub.com/api-fast-food';

  getProducts(): Observable<ExternalProduct[]> {
    return this.http.get<ExternalProduct[]>(`${this.baseUrl}/products`);
  }

  getCategories(): Observable<ExternalCategory[]> {
    return this.http.get<ExternalCategory[]>(`${this.baseUrl}/categories`);
  }
}