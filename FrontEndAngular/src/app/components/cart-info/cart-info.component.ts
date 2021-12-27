import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  totalPrice: number = 0.00;
  totalQuantity: number = 0;
  constructor(private cartService:CartService) {
    
  }

  ngOnInit(): void {
    this.updateCartInfo();
  }
  updateCartInfo( ){
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
     )
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }
}
