import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Shop Watches';
  cartTotalItems: string = '0';

  constructor(
    private navigationService: NavigationService,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void { 
    // Cart
    this.navigationService
      .getTotalCartItems()
      .subscribe((res: any) => {
        this.cartTotalItems = res;
      });

    this.utilityService.changeCart.subscribe((res: any) => {
      if (res === '0') this.cartTotalItems = '0';
      else this.cartTotalItems += parseInt(res);
    });

  }
}
