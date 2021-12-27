import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carteItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails(){
    this.carteItems = this.cartService.cartItems;
    console.log(this.carteItems);

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
      console.log(this.totalPrice)
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    console.log(this.totalQuantity)

    this.cartService.computeCartTotals();
  }
}
