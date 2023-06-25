import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDelete = (index, price) => {
    dispatch({ type: "DELETE", itemIndex: index, price: price });
  };
  return (
    <div className="container">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index}>
              {product.name} {product.price}
              <button onClick={() => handleDelete(index, product.price)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cart;
