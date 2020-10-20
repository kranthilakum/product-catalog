import { Component, OnInit } from '@angular/core';
import { products } from '../data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = products;

  constructor() { }

  ngOnInit(): void {
  }

  public share(): void {
    window.alert('The product has been shared!');
  }

  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

}
