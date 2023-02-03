import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleTypes, getArticleData } from "../fetch/getArticleData";
import moment from "moment";

import htmlParser from "html-react-parser";
import { ArticleStyle } from "../style/ArticleStyle";

const Article = () => {
  const { articleSlug } = useParams();
  const [articleData, setArticleData] = useState<ArticleTypes>(
    {} as ArticleTypes
  );
  useEffect(() => {
    const getData = async () => {
      setArticleData(await getArticleData(articleSlug!));
    };
    getData();
  }, []);
  return (
    <section className="p-4">
      <header className="py-4 border-b-[1px] border-slate-700">
        <h1 className="text-[4rem] font-semibold"> {articleData?.title}</h1>
        <time className="mt-2">
          {moment(articleData?.createAt).format("L")}
        </time>
        <nav className="flex gap-2 text-white mt-4">
          <Link to="/" className="py-2 px-4 rounded bg-gray-500">
            All Articles
          </Link>
          <Link
            to={`/edit-article/${articleSlug}`}
            className="py-2 px-4 rounded bg-green-500"
          >
            Edit
          </Link>
        </nav>
      </header>
      <main className="mt-4">
        <ArticleStyle>
          {articleData.html && htmlParser(articleData.html)}
        </ArticleStyle>
      </main>
    </section>
  );
};

export default Article;
