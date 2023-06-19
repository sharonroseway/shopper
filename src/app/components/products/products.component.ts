import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private ps: ProductService = inject(ProductService);
  products!: Product[];

  constructor(){
    /*this.ps.findAll().then(prods => {
      this.products = prods;
    });*/
    this.ps.findAll().subscribe(
      res => {
        this.products = res;
      }
    );
  }
}
