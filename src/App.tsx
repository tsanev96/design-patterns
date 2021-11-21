import logo from "./logo.svg";
import "./App.css";
import { getOrderTotalBefore } from "./Encapsulate/01_method-level";
import { orderData } from "./Encapsulate/data";
import { OrderAfter, OrderBefore } from "./Encapsulate/02_class-level";

function App() {
  const orderFC = getOrderTotalBefore(orderData);
  // console.log(orderFC);

  const orderCl = new OrderBefore(orderData);
  // console.log("order class", orderCl.getOrderTotal());

  const orderClAfter = new OrderAfter(orderData);
  // console.log("order class", orderClAfter.getOrderTotal());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
