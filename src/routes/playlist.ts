import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`get list for ${req.params.id}`);
});

export default router;
