import { Product } from '../product-card/Product';

export interface CartItem {
  product: Product;
  quantity: number;
}
