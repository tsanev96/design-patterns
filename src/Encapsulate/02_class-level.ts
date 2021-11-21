import { Countries, OrderDetails } from "./types";

// BEFORE: calculatin tax in Order class
export class OrderBefore implements OrderDetails {
  public lineItems: { price: number; quantity: number }[] = [];
  public country: Countries = "us";

  constructor(order: OrderDetails) {
    this.lineItems = [...order.lineItems];
    this.country = order.country;
  }

  getOrderTotal() {
    let total = 0;
    for (const item of this.lineItems) {
      total += item.price * item.quantity;
    }
    total += total * this.getTaxRate(this.country);

    return total;
  }

  getTaxRate(country: Countries) {
    switch (country) {
      case "bg":
        return 0.2;
      case "tu":
        return 0.1;
      case "us":
        return 0.07;
      default:
        return 0;
    }
  }
}

// AFTER: tax calculation is hidden from the Order class
export class OrderAfter implements OrderDetails {
  public lineItems: { price: number; quantity: number }[] = [];
  public country: Countries = "us";

  constructor(order: OrderDetails) {
    this.lineItems = [...order.lineItems];
    this.country = order.country;
  }

  getOrderTotal() {
    let total = 0;
    for (const item of this.lineItems) {
      total += item.price * item.quantity;
    }
    const taxCalulator = new TaxCalculator();

    return (total += total * taxCalulator.getTaxRate(this.country));
  }
}

export class TaxCalculator {
  // TODO SINGLETON
  getTaxRate(country: Countries) {
    switch (country) {
      case "bg":
        return 0.2;
      case "tu":
        return 0.1;
      case "us":
        return 0.07;
      default:
        return 0;
    }
  }

  // some more logic about the tax
}
