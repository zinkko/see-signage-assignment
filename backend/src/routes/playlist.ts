import express from "express";
import { getList } from "../repository/playlist";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.send(await getList(req.params.id));
});

export default router;
