import { addItem } from "../store/actions/cart";
import { useDispatch } from "react-redux";

export const useAddtoCart = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
  };

  return {
    addToCartHandler,
  };
};
