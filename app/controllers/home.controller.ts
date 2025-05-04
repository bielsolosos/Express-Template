import { Request, Response } from "express";
import { Home } from "../models/home";

export function testHome(req: Request, res: Response<Home>) {
  res.status(200).send({
    status: "API FUNCIONANDO!",
  });
}
