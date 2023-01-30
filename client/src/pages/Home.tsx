import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  return (
    <section className="flex flex-col pt-4 gap-4 w-full max-w-[900px] mx-auto">
      <h1 className="font-semibold text-4xl">Blog Articles</h1>
      <Link
        to="/new-article"
        className="w-[max-content] bg-green-600 rounded py-2 px-4 text-white"
      >
        New Article
      </Link>
      <main className="flex flex-col gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
    </section>
  );
};

export default Home;
