import express from "express";
import { connectToDB } from "./db/dbConnection";
import cors from "cors";
import Article from "./db/model/article";
import md from "markdown-it";

const app = express();
app.use(cors());
app.use(express.json());
connectToDB();

app.get("/test", async (req, res) => {
  const articleData = await Article.find({
    slug: "everything-you-need-to-know-about-typescript",
  });
  if (!articleData) return;
  const articleHTML = md().render(articleData[0].markdown[0]!);
  res.json(articleHTML);
});

app.post("/create-article", (req, res) => {
  const { title, description, markdown } = req.body;

  Article.create({
    title,
    description,
    markdown: [markdown],
    slug: "everything-you-need-to-know-about-typescript",
  });
});

app.listen(3000, () => {
  console.log("server running");
});
