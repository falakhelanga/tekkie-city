import mongoose from "mongoose";

const schema = mongoose.Schema;

const OrdersSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true, default: 0 },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: schema.Types.ObjectId,
          required: true,
          ref: "Products",
        },
      },
    ],
    shippingAdress: {
      streetNumber: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      province: { type: String, required: true },
      suburb: { type: String, Required: true },
      recipientName: {
        type: String,
        required: true,
      },
      recipientNumber: {
        type: String,
        required: true,
      },
    },
    payment: {
      method: { type: String, required: true },
      gateway: { type: String, required: true },
      method_id: { type: String, required: true },
      type: { type: String, required: true },
      totalPrice: { type: Number, required: true },
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    delieveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", OrdersSchema);

export default Orders;
