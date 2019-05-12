import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-cart-ecommerce',
  templateUrl: './cart-ecommerce.page.html',
  styleUrls: ['./cart-ecommerce.page.scss'],
})
export class CartEcommercePage implements OnInit {

  selectedItems = [];

   total = 0;

  constructor(private ecommerceService: EcommerceService ) { }

  ngOnInit() {
    // let items = this.ecommerceService.getCart();
    // let selected = {};
    // for (let obj of items) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   } else {
    //     selected[obj.id] = {...obj, count: 1};
    //   }
    // }
    // this.selectedItems = Object.keys(selected).map(key => selected[key])
    // this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

}
