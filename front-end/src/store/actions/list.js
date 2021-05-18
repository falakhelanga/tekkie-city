import { wishListActions } from "../createSlices/wishList";
import axios from "axios";

const list = () => async (dispatch, getState) => {
  dispatch(wishListActions.getListInit());
  const token = getState().login.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  try {
    const {
      data: { list },
    } = await axios.get("/api/users/list", config);
    dispatch(wishListActions.getListSucc(list));
  } catch (error) {
    dispatch(wishListActions.getListFail(error.response?.data.message));
  }
};

export default list;
