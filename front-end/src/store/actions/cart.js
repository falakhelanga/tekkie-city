import { cartActions } from "../createSlices/cart";

export const addItem = (item) => (dispatch, getState) => {
  dispatch(
    cartActions.addItem({
      title: item.title,
      image: item.image,
      price: item.price,
      ratings: item.ratings,
      qty: item.qty,
      numStock: item.numStock,
      id: item.id,
    })
  );

  const parsedCart = JSON.stringify({
    products: getState().cart.products,
    totalPrice: getState().cart.totalPrice,
  });
  localStorage.setItem("cart", parsedCart);
};

export const deleteItem = (id) => (dispatch, getState) => {
  dispatch(cartActions.deleteItem(id));

  const parsedCart = JSON.stringify({
    products: getState().cart.products,
    totalPrice: getState().cart.totalPrice,
  });
  localStorage.setItem("cart", parsedCart);
};

export const emptyCart = () => async (dispatch, getState) => {
  dispatch(cartActions.emptyCart());

  const parsedCart = JSON.stringify({
    products: getState().cart.products,
    totalPrice: getState().cart.totalPrice,
  });
  localStorage.setItem("cart", parsedCart);
};
