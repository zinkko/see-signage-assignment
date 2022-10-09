import express, { Express, Request, Response } from "express";
import PlaylistRoute from "./routes/playlist";
import AdminRoute from "./routes/admin";
import cors from "cors";
import { createClient } from "redis";

const app: Express = express();
const port = 8080;

export const redisClient = createClient();
redisClient.connect();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/playlist", PlaylistRoute);
app.use("/admin", AdminRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
