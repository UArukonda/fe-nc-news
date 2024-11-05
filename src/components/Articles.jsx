import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

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
    <div>
      <ul className="article-list">
        {articleList.map((article) => {
          return <ArticleCard article={article} key={article.id} />;
        })}
      </ul>
    </div>
  );
};

export default Articles;
