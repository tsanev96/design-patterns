export interface OrderDetails {
  lineItems: Product[];
  country: Countries;
}

export type Countries = "us" | "bg" | "tu";

type Product = {
  price: number;
  quantity: number;
};
