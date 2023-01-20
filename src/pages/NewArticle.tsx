import React from "react";
import { Link } from "react-router-dom";

const NewArticle = () => {
  return (
    <section className="p-4">
      <h1 className="text-4xl font-semibold text-center">New Article</h1>

      <form className="flex flex-col gap-6 mt-4 w-full max-w-[900px] mx-auto">
        <label className="flex flex-col gap-2">
          <span>Title:</span>
          <input type="text" className="border-[2px] border-slate-500 p-2" />
        </label>
        <label className="flex flex-col gap-2">
          <span>Description:</span>
          <textarea
            name=""
            id=""
            className="border-[2px] border-slate-500 p-2"
          ></textarea>
        </label>
        <label className="flex flex-col gap-2">
          <span>Markdown:</span>
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
            className=" border-[2px] border-slate-500 p-2"
          ></textarea>
        </label>

        <div className="flex gap-2 text-white">
          <Link to="" className="py-2 px-4 rounded bg-gray-600 ">
            Cancel
          </Link>
          <button className="py-2 px-4 rounded bg-blue-600">Save</button>
        </div>
      </form>
    </section>
  );
};

export default NewArticle;
