import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private prodUrl: string = `http://localhost:8080/api/products`;
  private http: HttpClient = inject(HttpClient)

  /*private products: Product[] = [
    {id: 1, uuid: 'ac21', name: 'Nakia N8', price: 199.99},
    {id: 2, uuid: 'ac21', name: 'Galaxy Prime', price: 159.99},
    {id: 3, uuid: 'ac21', name: 'Galaxy Note S8', price: 345}
  ];*/

  constructor() { }

  /*async findAll(): Promise<Product[]>{
    const data = await fetch(`${this.prodUrl}`);
    return await data.json() ?? [];
  }
  async fingById(uuid: string): Promise<Product | undefined>{
    const data = await fetch(`${this.prodUrl}/${uuid}`);
    return await data.json() ?? {};
  }*/
  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.prodUrl}`);
  }

  fingById(uuid: string): Observable<Product>{
    return this.http.get<Product>(`${this.prodUrl}/${uuid}`);
  }
  save(prod: Product): Observable<Product>{
    return this.http.post<Product>(`${this.prodUrl}`, prod);
  }
}
