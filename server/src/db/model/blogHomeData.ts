import mongoose, { Schema } from "mongoose";

const articleHomeDataSchema = new Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  fullArticleID: String,
  slug: String,
});

const BlogHomeData = mongoose.model("blog-home-data", articleHomeDataSchema);
export default BlogHomeData;
