import express from "express";
import { connectToDB } from "./db/dbConnection";
import cors from "cors";
import Article from "./db/model/article";
import md from "markdown-it";
import BlogHomeData from "./db/model/blogHomeData";

const app = express();
app.use(cors());
app.use(express.json());
connectToDB();

app.get("/get-all-articles", async (req, res) => {
  const allArticles = await BlogHomeData.find();
  res.json(allArticles[0].homeData);
});

app.get("/test", async (req, res) => {
  const articleData = await Article.find({
    slug: "everything-you-need-to-know-about-typescript",
  });
  if (!articleData) return;
  const articleHTML = md().render(articleData[0].markdown[0]!);
  res.json(articleHTML);
});

app.post("/create-article", async (req, res) => {
  const { title, description, markdown } = req.body;

  Article.create({
    title,
    description,
    markdown: [markdown],
    slug: "everything-you-need-to-know-about-typescript",
  });
  const newArticleData = {
    title,
    description,
    slug: "test-slug",
  };
  console.log(req.body);
  const blogHomeData = await BlogHomeData.findOne();
  if (blogHomeData === null) {
    await BlogHomeData.create({
      homeData: [],
    });
  }
  blogHomeData?.homeData.push(newArticleData);
  await blogHomeData?.save();
});

app.listen(3000, () => {
  console.log("server running");
});
