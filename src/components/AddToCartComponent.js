import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
const AddToCartComponent = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleClick = (product) => {
    let id = product.id;
    let name = product.name;
    let price = product.price;
    let obj = { id, name, price: price || 0 };
    console.log(obj);

    dispatch({ type: "PURCHASE", payLoad: obj });
  };

  return (
    <div className="container">
      <h3>Store</h3>
      <hr />
      <ul className="cartlist">
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            {"    "} - {"   "}${product.price}{" "}
            <button onClick={() => handleClick(product)}>Add Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCartComponent;
