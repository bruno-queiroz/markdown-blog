interface PostArticlePayload {
  title: string;
  descripition: string;
  markdown: string;
}

export const postArticle = async (newArticle: PostArticlePayload) => {
  const response = await fetch("http://localhost:3000/create-article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });
  const data = await response.json();
  return data;
};
