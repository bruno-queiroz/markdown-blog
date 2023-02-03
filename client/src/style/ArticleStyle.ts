import styled from "styled-components";
export const ArticleStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  ol {
    margin-left: 4rem;
    list-style-type: disc;
  }
  a {
    color: #22c55e;
    font-weight: 600;
  }
`;
