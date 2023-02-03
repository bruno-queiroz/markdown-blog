import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
  title: String,
  description: String,
  markdown: [String],
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  html: String,
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
