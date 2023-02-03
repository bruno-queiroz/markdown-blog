export const createSlug = (title: string) => {
  const slug = title
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/(\-\-\-)/g, "-");
  return slug;
};
