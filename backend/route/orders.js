import auth from "../middlewares/Auth.js";
import * as orderController from "../controllers/order.js";
import express from "express";

const router = express.Router();

router
  .route("/")
  .post(auth, orderController.putOrder)
  .get(auth, orderController.getOrder);

router.get("/:id", auth, orderController.getOneOrder);
export default router;
