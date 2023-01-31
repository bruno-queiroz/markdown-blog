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
  res.json(allArticles);
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

  const articleCreated = await Article.create({
    title,
    description,
    markdown: [markdown],
    slug: "everything-you-need-to-know-about-typescript",
  });

  const newArticleSnippetData = {
    title,
    description,
    slug: "test-slug",
    fullArticleID: articleCreated._id,
  };
  BlogHomeData.create(newArticleSnippetData);
});

app.delete(
  "/delete-article/:fullArticleID/:articleSnippetID",
  async (req, res) => {
    const { fullArticleID, articleSnippetID } = req.params;
    const a = await Article.findByIdAndDelete({ _id: fullArticleID });
    const b = await BlogHomeData.findByIdAndDelete({ _id: articleSnippetID });
  }
);

app.listen(3000, () => {
  console.log("server running");
});
