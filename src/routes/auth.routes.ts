// login // logout // register

import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/user/login", (req: Request, res: Response, next: NextFunction) => {
  res.send("Login end point");
}); // client side token ==> accessToken:"{id:"db" ,"phone" ,"shippingAdress"}" , refreshToken==> 3min expiry ==> 2m ==> security

router.post("/user/register"); // create

// router.post("/user/logout"); // ===>

export default router;
