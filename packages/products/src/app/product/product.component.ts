import { Component } from '@angular/core';
import { PRODUCTS } from '../mock/mock-products';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = PRODUCTS;
  selectedProduct?: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
