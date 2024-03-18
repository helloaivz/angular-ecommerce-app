export interface Category {
  id: number;
  title: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  qty: number;
  image: string;
}

export interface Cart {
  transactionid: number;
  productId: number;
  qty: number;
  product: Product;
}

