import express, { Request, Response } from "express";
import Item from "./models";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/getAll", async (req: Request, res: Response) => {
  console.log("Got request at GetAll Route");
  const data = await Item.find({});
  res.json(data);
});

app.get("/hi", async (req: Request, res: Response) => {
  console.log("Got request at Searching Route");

  const { data } = req.query;
  const query: any = {};
  if (data) {
    query.$or = [{ name: { $regex: new RegExp(data as string, "i") } }];
    {
      description: {
        $regex: new RegExp(data as string, "i");
      }
    }
  }
  const products = await Item.find(query);
  res.json(products);
});
export default app;
