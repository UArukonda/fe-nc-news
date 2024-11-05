import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Header from "./Header";

const Articles = () => {
  const [articleList, setArticleList] = useState([
    { id: 1, desc: "lorem epson" },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((response) => {
      setIsLoading(false);
      setArticleList(response);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <seaction>
        <ul className="article-list">
          {articleList.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </seaction>
    </>
  );
};

export default Articles;
