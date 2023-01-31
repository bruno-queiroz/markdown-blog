import mongoose, { Schema } from "mongoose";

const articleHomeDataSchema = new Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: String,
});

const blogHomeDataSchema = new Schema({
  homeData: { type: [articleHomeDataSchema], default: { homeData: [] } },
});

const BlogHomeData = mongoose.model("blog-home-data", blogHomeDataSchema);
export default BlogHomeData;
