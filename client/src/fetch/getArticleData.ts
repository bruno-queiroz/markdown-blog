export interface ArticleTypes {
  title: string;
  description: string;
  createAt: Date;
  _id: string;
  markdown: [string];
  slug: string;
  html: string;
}

export const getArticleData = async (
  articleSlug: string,
  populateInputs?: (
    title: string,
    description: string,
    markdown: string
  ) => void
) => {
  const response = await fetch(
    `http://localhost:3000/get-article/${articleSlug}`
  );
  const data: ArticleTypes = await response.json();
  if (data.markdown && populateInputs) {
    populateInputs(data.title, data.description, data.markdown[0]);
  }
  return data;
};
