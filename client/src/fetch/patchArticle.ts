interface ArticleUpdateRequestType {
  title: string;
  description: string;
  markdown: string;
}
export const patchArticle = async (
  articleSlug: string,
  updatedArticle: ArticleUpdateRequestType
) => {
  console.log(articleSlug);
  console.log(updatedArticle);
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

  const data = await response.json();
  return data;
};
