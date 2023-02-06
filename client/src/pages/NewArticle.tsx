import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Notificate from "../components/Notificate";
import { postArticle, PostArticleServerResponse } from "../fetch/postArticle";

const NewArticle = () => {
  const [postArticleServerResponse, setPostArticleServerResponse] =
    useState<PostArticleServerResponse>({ status: "error", msg: "" });

  const titleInputValue = useRef<HTMLInputElement>(null);
  const descriptionTextAreaValue = useRef<HTMLTextAreaElement>(null);
  const markdownTextAreaValue = useRef<HTMLTextAreaElement>(null);

  const handlePostArticle = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (
      !titleInputValue.current?.value &&
      !descriptionTextAreaValue.current?.value &&
      !markdownTextAreaValue.current?.value
    ) {
      setPostArticleServerResponse({ msg: "Empty Fields!", status: "error" });
      return;
    }

    const newArticle = {
      title: titleInputValue.current!.value,
      description: descriptionTextAreaValue.current!.value,
      markdown: markdownTextAreaValue.current!.value,
    };
    setPostArticleServerResponse(await postArticle(newArticle));
  };

  return (
    <section className="p-4">
      <Notificate
        msg={postArticleServerResponse.msg}
        variant={postArticleServerResponse.status}
      />
      <h1 className="text-4xl font-semibold text-center">New Article</h1>

      <form
        className="flex flex-col gap-6 mt-4 w-full max-w-[900px] mx-auto"
        onSubmit={handlePostArticle}
      >
        <label className="flex flex-col gap-2">
          <span>Title:</span>
          <input
            type="text"
            className="border-[2px] border-slate-500 p-2"
            ref={titleInputValue}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Description:</span>
          <textarea
            ref={descriptionTextAreaValue}
            className="border-[2px] border-slate-500 p-2"
          ></textarea>
        </label>
        <label className="flex flex-col gap-2">
          <span>Markdown:</span>
          <textarea
            ref={markdownTextAreaValue}
            className=" border-[2px] border-slate-500 p-2"
          ></textarea>
        </label>

        <div className="flex gap-2 text-white">
          <Link to="/" className="py-2 px-4 rounded bg-gray-600 ">
            Cancel
          </Link>
          <button className="py-2 px-4 rounded bg-blue-600">Save</button>
        </div>
      </form>
    </section>
  );
};

export default NewArticle;
