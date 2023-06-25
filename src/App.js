import { useState } from "react";
import "./App.css";
import AddToCartComponent from "./components/AddToCartComponent";
import CartComponent from "./components/Cart";
import TotalComponent from "./components/TotalComponent";
import TotalContext from "./Store/store";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <AddToCartComponent />
      <CartComponent />
      <TotalComponent />
    </div>
  );
}

export default App;
