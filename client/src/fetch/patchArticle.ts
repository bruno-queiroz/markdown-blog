interface ArticleUpdateRequestType {
  title: string;
  description: string;
  markdown: string;
}
interface PatchResponse {
  status: "error" | "success";
  msg: string;
}
export const patchArticle = async (
  articleSlug: string,
  updatedArticle: ArticleUpdateRequestType
) => {
  const response = await fetch(
    `http://localhost:3000/edit-article/${articleSlug}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArticle),
    }
  );

  const data: PatchResponse = await response.json();
  return data;
};
