import express from "express";
import bodyParser from "body-parser";
import { addList, getAll, addItemToList } from "../repository/playlist";

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/playlist", async (req, res) => {
  res.send(await getAll());
});

router.post("/playlist", jsonParser, async (req, res) => {
  const { name, items } = req.body;
  console.log("request create list", name, items);
  await addList(name, items);
  res.status(201);
  res.send();
});

router.post("/playlist/:id", jsonParser, async (req, res) => {
  const { newItem } = req.body;
  await addItemToList(req.params.id, newItem);
  res.status(200);
  res.send();
});

export default router;
