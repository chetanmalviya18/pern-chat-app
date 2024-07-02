import jwt from "jsonwebtoken";
import prisma from "../DB/prisma.config.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res.json({
        status: 401,
        error: "Unauthorized - Invalid token",
      });

    if (decoded.exp < Date.now() / 1000) {
      return res.json({
        status: 401,
        error: "Unauthorized - Token expired",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        username: true,
        fullName: true,
        profilepic: true,
      },
    });

    if (!user) return res.json({ status: 404, error: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.json({ status: 500, error: "Internal Server Error" });
  }
};

export default protectRoute;
