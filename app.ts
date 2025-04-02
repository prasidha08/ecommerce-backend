// router
import express, { NextFunction, Request, Response } from "express";
import AuthRouter from "./src/routes/auth.routes";

// db ==> register , login ==> product ==>
const app = express();

//middleware
// app.use("/api");

//TODO:
app.use(AuthRouter);

export = app;
