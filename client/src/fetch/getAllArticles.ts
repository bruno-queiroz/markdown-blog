export interface ArticleCardDataTypes {
  title: string;
  description: string;
  createAt: Date;
  _id: string;
}

export const getAllArticles = async () => {
  const response = await fetch("http://localhost:3000/get-all-articles");
  const data: ArticleCardDataTypes[] = await response.json();
  return data;
};
