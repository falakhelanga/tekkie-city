import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization && authorization.split(" ")[1];

  try {
    if (!authorization && !token) {
      const error = new Error("You are not authanticated, Please login");
      res.status(401);
      throw error;
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken.userId) {
      const error = new Error("You are not authanticated, Please login");
      res.status(401);
      throw error;
    }

    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
