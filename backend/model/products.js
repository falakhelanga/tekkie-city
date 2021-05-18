import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    price: {
      required: true,
      type: Number,
    },
    productName: {
      required: true,
      type: String,
    },

    image: {
      required: true,
      type: String,
    },

    detailsImage: [
      {
        type: String,
        required: true,
      },
    ],
    details: {
      type: String,
      required: true,
    },
    description: {
      required: true,
      type: String,
    },

    productInformation: {
      colors: [
        {
          type: String,
          required: true,
        },
      ],

      brand: {
        type: String,
        required: true,
      },
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    reviews: [reviewsSchema],
    numStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
