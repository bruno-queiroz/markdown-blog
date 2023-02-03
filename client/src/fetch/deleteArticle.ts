export const deleteArticle = async (
  fullArticleID: string,
  articleSnippetID: string,
  refreshArticles: () => void
) => {
  const response = await fetch(
    `http://localhost:3000/delete-article/${fullArticleID}/${articleSnippetID}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  console.log(refreshArticles);

  refreshArticles();
  return data;
};
