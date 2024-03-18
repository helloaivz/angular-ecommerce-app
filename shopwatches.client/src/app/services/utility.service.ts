import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Cart, Product } from '../models/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  changeCart = new Subject();
  constructor(private navigationService: NavigationService) { }

  addToCart(product: Product) {
    let productid = product.id;

    this.navigationService.addToCart(productid).subscribe((res) => {
      if (res.toString() === 'inserted') this.changeCart.next(1);

    });
  }

  updateCart(cart: Cart) {
    let productid = cart.productId;
    let qty = cart.qty;

    this.navigationService.updateCart(productid, qty).subscribe((res) => {
      if (res.toString() === 'updated') window.location.reload(); this.changeCart.next(1);
    });
  }

  removeItem(cart: Cart) {
    let productid = cart.productId;

    this.navigationService.removeItem(productid).subscribe((res) => {
      if (res.toString() === 'removed') window.location.reload();
    });
  }
}
