import express from "express";
import bodyParser from "body-parser";
import {
  addList,
  getAll,
  addItemToList,
  setList,
} from "../repository/playlist";

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/playlist", async (req, res) => {
  res.send(await getAll());
});

router.post("/playlist", jsonParser, async (req, res) => {
  const { name, items } = req.body;
  await addList(name, items);
  res.status(201);
  res.send();
});

router.post("/playlist/:id", jsonParser, async (req, res) => {
  const { newItem } = req.body;
  await addItemToList(req.params.id, newItem);
  res.send();
});

router.put("/playlist/:id", jsonParser, async (req, res) => {
  const list = req.body;
  await setList(req.params.id, list);
  res.send();
});

export default router;
