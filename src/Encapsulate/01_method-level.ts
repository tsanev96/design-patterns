import { Countries, OrderDetails } from "./types";

// BEFORE: tax calculation code is mixed with the rest of the method's code
export const getOrderTotalBefore = (order: OrderDetails) => {
  let total = 0;

  for (const item of order.lineItems) {
    total += item.price * item.quantity;
  }

  switch (order.country) {
    case "bg":
      total += total * 0.2;
      break;
    case "tu":
      total += total * 0.1;

      break;
    case "us":
      total += total * 0.07;
      break;
    default:
      return 1;
  }

  return total;
};

// AFTER: you can get the tax rate by calling a designate method
export const getOrderTotalAfter = (order: OrderDetails) => {
  let total = 0;

  for (const item of order.lineItems) {
    total += item.price * item.quantity;
  }

  total += total * getTaxRate(order.country);
};

export const getTaxRate = (country: Countries) => {
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
};

// Tax-related changes become isolated inside a single method. Moreover, if the tax calculation logic
// becomes too complicated, its now easier to move it to a separate class.
