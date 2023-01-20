import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
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
          <h2>Big Title</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            officiis recusandae velit, esse iure dolore, eaque inventore
            assumenda unde et voluptate, eos reprehenderit earum accusamus
            tenetur non. Corrupti, voluptate error!
          </p>

          <h2>What Are Guard Clauses?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            temporibus neque dignissimos labore facere sint nesciunt quasi
            recusandae ad dolores saepe, officia quaerat iure laboriosam
            voluptate. Pariatur quas earum sed.
          </p>
        </article>
      </main>
    </section>
  );
};

export default Article;
