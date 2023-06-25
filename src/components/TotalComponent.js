import { useSelector } from "react-redux";
const TotalComponent = () => {
  const total = useSelector((state) => state.total);
  return (
    <div className="container total">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};
export default TotalComponent;
