import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <article className="flex  flex-col p-6 rounded-md border-[2px] border-slate-600 gap-4">
      <h2 className="font-semibold text-2xl">
        Guard Clauses - The Best Way To Write Complex Conditional Logic
      </h2>
      <time className="text-gray-900">03/08/2023</time>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima veniam
        nulla nesciunt vitae soluta iusto, quod doloribus optio blanditiis
      </p>
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
            <button className="py-2 px-4 rounded bg-red-600 text-white">
              Remove
            </button>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default ArticleCard;
