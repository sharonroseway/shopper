import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import {routes as productRoutes} from './components/products/product.routes';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'products', children: productRoutes}
];