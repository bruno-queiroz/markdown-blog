import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { ArticleCardDataTypes, getAllArticles } from "../fetch/getAllArticles";

const Home = () => {
  const [allArticles, setAllArticles] = useState<ArticleCardDataTypes[]>([]);
  const getArticles = async () => {
    console.log("refreshing");
    const articles = await getAllArticles();
    console.log(articles);
    setAllArticles(articles);
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section className="flex flex-col p-4 gap-4 w-full max-w-[900px] mx-auto">
      <h1 className="font-semibold text-4xl">Blog Articles</h1>
      <Link
        to="/new-article"
        className="w-[max-content] bg-green-600 rounded py-2 px-4 text-white"
      >
        New Article
      </Link>
      <main className="flex flex-col gap-4">
        {allArticles?.map((article, index) => (
          <ArticleCard
            key={index}
            {...article}
            {...{ refreshArticles: () => getArticles() }}
          />
        ))}
      </main>
    </section>
  );
};

export default Home;
