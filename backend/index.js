import express from "express";
import mongoConnect from "./mongoose/mongoConnect.js";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleWare, routerNotFound } from "./middlewares/errorAnd404.js";
import ordersRoute from "./route/orders.js";
import userRouter from "./route/user.js";
import productRouter from "./route/products.js";
import path from "path";

const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", ordersRoute);
app.use("/images", express.static(path.join(__dirname, "/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/build")));
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });
}

app.use(routerNotFound);
app.use(errorMiddleWare);
mongoConnect();

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("connected");
});
