import express from "express";
import bodyParser from "body-parser";
import { addList, getAll } from "../repository/playlist";

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/playlist", async (req, res) => {
  res.send(await getAll());
});

router.post("/playlist", jsonParser, (req, res) => {
  const { name, items } = req.body;
  console.log("request create list", name, items);
  addList(name, items);
  res.status(201);
  res.send();
});

export default router;
