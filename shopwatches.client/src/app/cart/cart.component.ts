import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';
import { FormsModule, NgForm } from "@angular/forms";
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  changeCart = new Subject();
  cartItems: Cart[] = [];

  cartForm = {
    productId: 0,
    qty: 0
  };

  displayMessage = false;
  message = '';
  classname = '';

  submitted: boolean = false;

  constructor(
    public utilityService: UtilityService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void { 

    // Get Cart
    this.navigationService
      .getCartItems()
      .subscribe((res: any) => {
        this.cartItems = res;
      });
  }

  update(cartForm: NgForm) {
    let productid = cartForm.value.productId;
    let qty = cartForm.value.qty;

    this.navigationService.updateCart(productid,qty).subscribe((res: any) => {
      this.displayMessage = true;

      let step = 0;
      let count = timer(0, 3000).subscribe((res) => {
        ++step;
        if (step === 1) {
          this.classname = 'text-success';
          this.message = 'Cart Updated Successfully!';
        }

        if (step === 2) {
          this.displayMessage = false;

          window.location.reload();
        }
      });

    });

  }

  }
