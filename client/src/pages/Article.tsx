import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticleData } from "../fetch/getArticleData";
import htmlParser from "html-react-parser";

const Article = () => {
  const [articleData, setArticleData] = useState("");
  console.log(articleData);
  useEffect(() => {
    const getData = async () => {
      setArticleData(await getArticleData());
    };
    getData();
  }, []);
  return (
    <section className="p-4">
      <header className="py-4 border-b-[1px] border-slate-700">
        <h1 className="text-[4rem] font-semibold">
          {" "}
          Guard Clauses - The Best Way To Write Complex Conditional Logic
        </h1>
        <time>03/07/2022</time>
        <nav className="flex gap-2 text-white mt-4">
          <Link to="/" className="py-2 px-4 rounded bg-gray-500">
            All Articles
          </Link>
          <Link
            to="/edit-article/j5j4lljbk3pjj5n3"
            className="py-2 px-4 rounded bg-green-500"
          >
            Edit
          </Link>
        </nav>
      </header>
      <main className="mt-4">
        <article className="flex flex-col gap-4">
          {htmlParser(articleData)}
        </article>
      </main>
    </section>
  );
};

export default Article;
