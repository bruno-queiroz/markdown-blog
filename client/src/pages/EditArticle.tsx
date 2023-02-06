import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Notificate from "../components/Notificate";
import { ArticleTypes, getArticleData } from "../fetch/getArticleData";
import { patchArticle } from "../fetch/patchArticle";
import { postArticle, PostArticleServerResponse } from "../fetch/postArticle";

const EditArticle = () => {
  const [postArticleServerResponse, setPostArticleServerResponse] =
    useState<PostArticleServerResponse>({ status: "error", msg: "" });

  const { articleSlug } = useParams();
  const titleInputValue = useRef<HTMLInputElement>(null);
  const descriptionTextAreaValue = useRef<HTMLTextAreaElement>(null);
  const markdownTextAreaValue = useRef<HTMLTextAreaElement>(null);

  const fillInputs = (title: string, description: string, markdown: string) => {
    if (
      titleInputValue.current &&
      descriptionTextAreaValue.current &&
      markdownTextAreaValue.current
    ) {
      titleInputValue.current.value = title;
      descriptionTextAreaValue.current.value = description;
      markdownTextAreaValue.current.value = markdown;
    }
  };

  useEffect(() => {
    const getData = async () => {
      getArticleData(articleSlug!, fillInputs);
    };
    getData();
  }, []);

  const handleUpdateArticle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (
      !titleInputValue.current?.value &&
      !descriptionTextAreaValue.current?.value &&
      !markdownTextAreaValue.current?.value
    )
      return;
    const updatedArticle = {
      title: titleInputValue.current!.value,
      description: descriptionTextAreaValue.current!.value,
      markdown: markdownTextAreaValue.current!.value,
    };

    const patchResult = await patchArticle(articleSlug!, updatedArticle);
    setPostArticleServerResponse(patchResult);
  };
  return (
    <section className="p-4">
      <Notificate
        msg={postArticleServerResponse.msg}
        variant={postArticleServerResponse.status}
      />
      <h1 className="text-4xl font-semibold text-center">Edit your Article</h1>

      <form
        className="flex flex-col gap-6 mt-4 w-full max-w-[900px] mx-auto"
        onSubmit={handleUpdateArticle}
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

export default EditArticle;
