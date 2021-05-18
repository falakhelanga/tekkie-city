import express from "express";
import * as userController from "../controllers/user.js";
import auth from "../middlewares/Auth.js";
const router = express.Router();

router.post("/register", userController.register);
router.post("/signin", userController.signIn);
router
  .route("/list/:id")
  .post(auth, userController.addToList)
  .delete(auth, userController.deleteItem);
router.get("/list", auth, userController.getList);

export default router;
