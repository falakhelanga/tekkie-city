import Orders from "../model/orders.js";

export const putOrder = async (req, res, next) => {
  const userId = req.userId;

  const { items, adress, payment } = req.body;

  try {
    await Orders.create({
      user: userId,
      orderItems: items,
      shippingAdress: {
        streetNumber: adress.streetNumber,
        city: adress.city,
        postalCode: adress.postalCode,
        province: adress.province,
        recipientName: adress.recipientName,
        recipientNumber: adress.recipientNumber,
      },
      payment: {
        method: payment.method,
        gateway: payment.gateway,
        method_id: payment.id,
        type: payment.type,
        totalPrice: payment.total,
      },
      isPaid: true,
      paidAt: Date.now(),
      isDelivered: false,
    });

    res.status(201).json({ message: "order create successfully" });
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const orders = await Orders.find({ user: req.userId }).sort({
      createAt: -1,
    });

    res.json({
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const getOneOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Orders.findById(id);
    if (req.userId.toString() !== order.user.toString()) {
      const error = new Error("you are nit authorized");
      res.status(401);
      throw error;
    }

    res.json({
      order,
    });
  } catch (error) {
    next(error);
  }
};
