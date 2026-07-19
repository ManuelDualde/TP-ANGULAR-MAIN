import { CartItem } from '../cart/CartItem';

export interface Order {
  id?: string;
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  createdAt: string;
}
