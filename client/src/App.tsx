import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import EditArticle from "./pages/EditArticle";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleSlug" element={<Article />} />
        <Route path="/edit-article/:articleSlug" element={<EditArticle />} />
        <Route path="/new-article" element={<NewArticle />} />
      </Routes>
    </>
  );
};

export default App;
