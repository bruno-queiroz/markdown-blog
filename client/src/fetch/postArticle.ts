interface PostArticlePayload {
  title: string;
  description: string;
  markdown: string;
}
export interface PostArticleServerResponse {
  status: "error" | "success";
  msg: string;
}

export const postArticle = async (newArticle: PostArticlePayload) => {
  console.log(newArticle);
  const response = await fetch("http://localhost:3000/create-article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });
  const data: PostArticleServerResponse = await response.json();
  return data;
};
