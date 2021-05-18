import User from "../model/user.js";
import bycript from "bcryptjs";
import tokenGenerator from "../helperfunctions/jwtGenerator.js";

export const register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (userFound) {
      res.status(401);
      throw new Error("this email already exist in our database");
    }

    const hashedPassword = await bycript.hash(password, 12);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res
      .json({
        name: user.name,
        email: user.email,
        token: tokenGenerator(user._id),
      })
      .status(201);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      res.status(404);
      const error = new Error(
        "this email does not exist in our database, please register to log in"
      );
      throw error;
    }

    const isPasswordMatch = await bycript.compare(password, userFound.password);
    if (!isPasswordMatch) {
      const error = new Error("you have entered an invalid password");
      res.status(401);
      throw error;
    }

    res.status(200).json({
      email: userFound.email,
      token: tokenGenerator(userFound._id),
    });
  } catch (error) {
    next(error);
  }
};

export const addToList = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const userFound = await User.findById(userId);
    if (!userFound) {
      const error = new Error("user not found");
      res.status(404);
      throw error;
    }

    const existingItem = userFound.wishlist.find(
      (item) => item.toString() === id.toString()
    );
    if (existingItem) {
      const error = new Error("You already added this Item");
      res.status(400);
      throw error;
    }
    userFound.wishlist.push(id);
    await userFound.save();
    res.status(201).json({
      message: "item added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getList = async (req, res, next) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).populate("wishlist");
    if (!user) {
      const error = new Error("user not found");
      res.status(404);
      throw error;
    }

    res.json({
      list: user.wishlist,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("user not found");
      res.status(404);
      throw error;
    }
    const newList = user.wishlist.filter(
      (item) => item.toString() !== id.toString()
    );

    user.wishlist = newList;
    await user.save();

    res.json({
      message: "item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
