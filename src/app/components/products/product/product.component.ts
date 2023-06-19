import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import {Observable, map} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [HttpClientModule]
})
export class ProductComponent {
  prod!: Product;
  private ps: ProductService = inject(ProductService);

  private route: ActivatedRoute = inject(ActivatedRoute);
  uuid: string = '';
  product: Product | undefined;
  
  constructor(){

    /*this.route.paramMap.subscribe(
      res => {
        this.uuid = res.get('uuid') || '';
        this.ps.fingById(this.uuid).then(res => {
          this.product = res;
        });
      }
    );*/
    
    this.uuid = this.route.snapshot.params['uuid'];
    this.ps.fingById(this.uuid).subscribe(
      res => {
        this.prod = res;
        console.log('Single prod: ', res);
        
      }
    );
    /*this.route.paramMap.subscribe(
      res => {
        this.uuid = res.get('uuid');
        this.ps.fingById(this.uuid).subscribe(
          res => {
            this.prod = res;
          }
        );
      }
    );*/
    
  }

  
}
