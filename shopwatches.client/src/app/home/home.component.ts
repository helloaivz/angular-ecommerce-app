import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';
import { from, timer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'ShopWatches';
  products: Product[] = [];
  errorMessage!: string;
  displayMessage = false;
  message = '';
  classname = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {

        this.navigationService
          .getProducts()
          .subscribe((res: any) => {
            this.products = res;
          });
    });

    this.utilityService.changeCart.subscribe((res: any) => {
      this.displayMessage = true;

      let step = 0;
      let count = timer(0, 3000).subscribe((res) => {
        ++step;
        //window.location.href = "/#addedtocart";
        if (step === 1) {
          this.classname = 'text-success';
          this.message = 'Added To Cart Successfully!';
        }

        if (step === 2) {
          this.displayMessage = false;
        }
      });
    });
    
  }

}
