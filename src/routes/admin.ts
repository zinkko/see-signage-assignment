import express from "express";

const router = express.Router();

router.get("/playlist", (req, res) => {
  res.send("All your playlists");
});

export default router;
