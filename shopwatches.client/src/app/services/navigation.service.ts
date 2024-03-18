import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

/*interface Products {
  id: number;
  title: string;
  categoryId: number;
  price: string;
  qty: number;
  image: string;
}
*/
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseurl = 'https://localhost:7154/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>(this.baseurl + 'GetProducts');
  }

  getProduct(id: number) {
    return this.http.get<any[]>(this.baseurl + 'GetProduct/' + id);
  }

  getCartItems() {
    let url = this.baseurl + 'GetCartItems/';
    return this.http.get(url);
  }

  getTotalCartItems() {
    let url = this.baseurl + 'GetTotalCartItems/';
    return this.http.get(url);
  }

  addToCart(productid: number) {
    let url = this.baseurl + 'InsertCartItem/' + productid;
    return this.http.post(url, null, { responseType: 'text' });
  }

  updateCart(productid: number, qty: number) {
    let url = this.baseurl + 'UpdateCart/' + productid + '/' + qty;
    return this.http.post(url, null, { responseType: 'text' }); 
  }

  removeItem(productid: number) {
    let url = this.baseurl + 'RemoveItem/' + productid;
    return this.http.post(url, null, { responseType: 'text' });
  }
}
