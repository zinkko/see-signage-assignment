import express from "express";
import { getData } from "../repository/playlist";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(getData());
});

export default router;
