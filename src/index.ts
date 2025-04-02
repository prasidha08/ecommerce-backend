import express, { NextFunction, Request, Response } from "express";
import AuthRouter from "../src/routes/auth.routes";

// db ==> register , login ==> product ==>
const app = express();

//middleware
// app.use("/api");

//TODO:
app.use(AuthRouter);

app.listen("8080", (data) => {
  console.log("🚀 ~ app.listen ~ data:", data);
  console.log("App is listening on port");
});
