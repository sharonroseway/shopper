import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";

export const routes: Routes = [
    {path: '', component: ProductsComponent, title: 'Catalog'},
    {path: ':uuid', component: ProductComponent, title: 'Single Product'}
]