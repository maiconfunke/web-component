import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
// Standalone components
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'products' },
	{ path: 'products', component: ProductsComponent },
	{ path: 'products/details', component: DetailsComponent },
	// wildcard to redirect unknown routes to products
	{ path: '**', redirectTo: 'products' }
];
