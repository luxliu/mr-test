export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  sizeOptions: string[];
  image: string;
};

export interface ShoppingState {
  product?: Product;
  loading: boolean;
}

export type AddToCardPayload = {
  product: Product;
  size: string;
};
