import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { shippingInfo } from './data';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = [];

  constructor(private http: HttpClient) { }

  public addToCart(product): void {
    this.items.push(product);
  }

  public getItems(): any[] {
    return this.items;
  }

  public clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices() {
    // @TODO: use http.get
    return shippingInfo;
  }
}
