import React from "react";
import { Link } from "react-router-dom";
import { deleteArticle } from "../fetch/deleteArticle";
import { ArticleCardDataTypes } from "../fetch/getAllArticles";

type ArticleCardProps = ArticleCardDataTypes;

const ArticleCard = ({
  title,
  createAt,
  description,
  _id,
  fullArticleID,
}: ArticleCardProps) => {
  const handleDeleteArticle = (
    fullArticleID: string,
    articleSnippetID: string
  ) => {
    deleteArticle(fullArticleID, articleSnippetID);
  };
  return (
    <article className="flex  flex-col p-6 rounded-md border-[2px] border-slate-600 gap-4">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <time className="text-gray-900">03/08/2023</time>

      <p>{description}</p>
      <nav>
        <ul className="flex mt-2 gap-4 items-center">
          <li>
            <Link
              to="/article/test-article"
              className="py-2 px-4 rounded bg-blue-600 text-white"
            >
              Read More
            </Link>
          </li>
          <li>
            <Link
              to="/edit-article/42ss7908hs8vs0f9w"
              className="py-2 px-4 rounded bg-cyan-500 text-white"
            >
              Edit
            </Link>
          </li>
          <li>
            <button
              className="py-2 px-4 rounded bg-red-600 text-white"
              onClick={() => handleDeleteArticle(fullArticleID, _id)}
            >
              Remove
            </button>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default ArticleCard;
