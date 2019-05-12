import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartEcommercePage } from './cart-ecommerce.page';

const routes: Routes = [
  {
    path: '',
    component: CartEcommercePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartEcommercePage]
})
export class CartEcommercePageModule {}
