import Product from "../model/products.js";
import mongoose from "mongoose";
export const create = async (req, res, next) => {
  const {
    numReviews,
    user,
    discountPrice,
    price,
    productName,
    image,
    detailsImage,
    description,
    productInformation,
    numStock,
    review,
    ratings,
    details,
  } = req.body;

  try {
    const product = new Product();
    await Product.create({
      user,
      discountPrice,
      price,
      productName,
      image,
      detailsImage,
      description,
      productInformation,
      numStock,
      ratings,
      details,
      numReviews,
      reviews: review,
    });
    res.status(201).json({ message: "product created!" });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  const page = req.query.page;
  const search = req.query.search;

  let keyWord = {};
  if (search) {
    keyWord = {
      productName: {
        $regex: search,
        $options: "i",
      },
    };
  }

  const ITEMS_PER_PAGE = 8;

  try {
    const count = await Product.countDocuments({ ...keyWord });
    const products = await Product.find({ ...keyWord })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
      .sort({
        createdAt: -1,
      });

    res.status(200).json({
      products: products.map((curr) => ({
        discountPrice: curr.price * (curr.discountPrice / 100),
        numStock: curr.numStock,
        title: curr.productName,
        price: curr.price - curr.price * (curr.discountPrice / 100),
        discount: curr.discountPrice,
        ratings: curr.ratings,
        image: curr.image,
        id: curr._id,
      })),
      total: Math.ceil(count / ITEMS_PER_PAGE),
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate("reviews.user");

    if (!product) {
      const error = new Error("no product found");
      res.status(404);
      throw error;
    }

    res.status(200).json({
      discountPrice: product.price * (product.discountPrice / 100),
      title: product.productName,
      price: product.price - product.price * (product.discountPrice / 100),
      discount: product.discountPrice,
      description: product.description,
      ratings: product.ratings,
      numReviews: product.numReviews,
      numStock: product.numStock,
      image: product.image,
      imageDetails: product.detailsImage,
      colors: product.productInformation.colors,
      brand: product.productInformation.brand,
      reviews: product.reviews,
      details: product.details,
    });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  const { id } = req.params;
  const { name, rate, comment } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) {
      const error = new Error("product not found");
      res.status(404);
      throw error;
    }
    const isExist = product.reviews.find(
      (review) => review.user.toString() === req.userId.toString()
    );
    if (isExist) {
      const error = new Error("You already added a review");
      res.status(401);
      throw error;
    }
    product.reviews.push({
      user: req.userId,
      name,
      comment,
      rating: rate,
    });
    product.numReviews = product.numReviews + 1;
    const ratingsSum =
      product.reviews.reduce((acc, review) => acc + +review.rating, 0) + +rate;
    product.ratings = +ratingsSum / (+product.numReviews + 1);
    await product.save();
    res.status(201).json({ message: "review added successfully" });
  } catch (error) {
    next(error);
  }
};
