// //This file contains the MiddleWare To Protect Route
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// //Middle Ware to protect Routes
// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.user.id).select("-password"); //Excludes password
//       next();
//     } catch (error) {
//       console.log(error);
//       console.error("Token Verification failed", error);
//       res.status(401).json({ message: "Not authorized, Token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Not authorized, no token Provided" });
//   }
// };

// //MiddleWare to  check if the User is Admin
// const admin = (req, res, next) => {
//   if (req.user && req.user.role == "admin") {
//     next();
//   } else {
//     res.status(403).json({ message: "Not Authorized as an admin" });
//   }
// };

// module.exports = { protect, admin };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      console.error("Token Verification failed", error);

      // ✅ Handle expired token explicitly
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Session expired. Please log in again." });
      }

      res.status(401).json({ message: "Not authorized. Invalid token." });
    }
  } else {
    res.status(401).json({ message: "Not authorized. No token provided." });
  }
};

// Middleware to check if the User is Admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin." });
  }
};

module.exports = { protect, admin };
