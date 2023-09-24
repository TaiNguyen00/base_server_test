import jwt from "jsonwebtoken";
import { createError } from "./createError";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(400).json({ message: "Bạn chưa xác thực" });

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token không hợp lệ"));
    req.user = user;
    next()
  });
};

// middlewares kiểm tra admin
export const verifyAdmin = (req, res, next) => {
   verifyToken(req, res, (err) => {
    const role = req.user.role
    console.log("role", role)
    if (req.user.role === 1) {
      next();
    } else {
      return res.status(400).json("Bạn k có quyền truy cập vào chức năng này");
    }
  });
};

// middleware kiểm tra chức năng

export const vefiryPackage = requiredPackage => {
    return (req, res, next) => {
      verifyToken(req, res, () => {
        console.log(" check package", req.user.package)
        console.log("check required", requiredPackage)
        if (req.user.package !== requiredPackage) return res.status(403).json("Không thành công")
        next() 
      })
    }
  }
  

