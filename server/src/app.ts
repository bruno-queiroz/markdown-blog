import express from "express";
import { connectToDB } from "./db/dbConnection";
import cors from "cors";
import Article from "./db/model/article";
import md from "markdown-it";
import BlogHomeData from "./db/model/blogHomeData";
import { createSlug } from "./utils/createSlug";

const app = express();
app.use(cors());
app.use(express.json());
connectToDB();

app.get("/get-all-articles", async (req, res) => {
  const allArticles = await BlogHomeData.find();
  res.json(allArticles);
});

app.get("/get-article/:articleSlug", async (req, res) => {
  const { articleSlug } = req.params;

  const article = await Article.findOne({ slug: articleSlug });
  const html = md().render(article?.markdown[0] || "");
  article!.html = html;

  res.json(article);
});

app.post("/create-article", async (req, res) => {
  const { title, description, markdown } = req.body;
  const slug = createSlug(title);
  const articleCreated = await Article.create({
    title,
    description,
    markdown: [markdown],
    slug,
  });

  const newArticleSnippetData = {
    title,
    description,
    slug,
    fullArticleID: articleCreated._id,
  };
  BlogHomeData.create(newArticleSnippetData);
});

app.delete(
  "/delete-article/:fullArticleID/:articleSnippetID",
  async (req, res) => {
    const { fullArticleID, articleSnippetID } = req.params;
    await Article.findByIdAndDelete({ _id: fullArticleID });
    await BlogHomeData.findByIdAndDelete({ _id: articleSnippetID });
  }
);

app.listen(3000, () => {
  console.log("server running");
});
