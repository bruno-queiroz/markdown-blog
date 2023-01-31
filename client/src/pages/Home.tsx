import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { ArticleCardDataTypes, getAllArticles } from "../fetch/getAllArticles";

const Home = () => {
  const [allArticles, setAllArticles] = useState<ArticleCardDataTypes[]>([]);
  console.log(allArticles);
  useEffect(() => {
    const getArticles = async () => {
      const articles = await getAllArticles();
      setAllArticles(articles);
    };
    getArticles();
  }, []);
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
        {allArticles?.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </main>
    </section>
  );
};

export default Home;
