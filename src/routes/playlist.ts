import express from "express";
import { getList } from "../repository/playlist";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(getList(req.params.id));
});

export default router;
