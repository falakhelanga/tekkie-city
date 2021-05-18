import { useSelector } from "react-redux";

const OrderSummury = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  return (
    <div classnName="mb-3">
      <h5 classnName="">Order Summary</h5>
      {products.map((product) => (
        <div className="d-flex mt-2" key={product.id}>
          <div>{product.title}</div>
          <div className="mx-3">R {product.price.toFixed(2)}</div>
          <div>x{product.qty}</div>
        </div>
      ))}

      <h5 className="mt-2">Total: R {totalPrice.toFixed(2)}</h5>
    </div>
  );
};

export default OrderSummury;
