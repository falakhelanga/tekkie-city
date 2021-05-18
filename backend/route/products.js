import express from "express";
import * as productsControllers from "../controllers/products.js";
import auth from "../middlewares/Auth.js";
const router = express.Router();

router
  .route("/")
  .post(productsControllers.create)
  .get(productsControllers.getAll);

router.post("/review/:id", auth, productsControllers.createReview);

router.get("/:id", productsControllers.getOne);

export default router;
