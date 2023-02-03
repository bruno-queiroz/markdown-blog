import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { deleteArticle } from "../fetch/deleteArticle";
import { ArticleCardDataTypes } from "../fetch/getAllArticles";

type ArticleCardProps = ArticleCardDataTypes & {
  refreshArticles: () => void;
};

const ArticleCard = ({
  title,
  createAt,
  description,
  slug,
  _id,
  fullArticleID,
  refreshArticles,
}: ArticleCardProps) => {
  const handleDeleteArticle = (
    fullArticleID: string,
    articleSnippetID: string
  ) => {
    deleteArticle(fullArticleID, articleSnippetID, refreshArticles);
  };
  return (
    <article className="flex  flex-col p-6 rounded-md border-[2px] border-slate-600 gap-4">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <time className="text-gray-900">{moment(createAt).format("L")}</time>

      <p>{description}</p>
      <nav>
        <ul className="flex mt-2 gap-4 items-center">
          <li>
            <Link
              to={`/article/${slug}`}
              className="py-2 px-4 rounded bg-blue-600 text-white"
            >
              Read More
            </Link>
          </li>
          <li>
            <Link
              to={`/edit-article/${slug}`}
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
