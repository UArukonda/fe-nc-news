import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articleList, setArticleList] = useState([
    { id: 1, desc: "lorem epson" },
  ]);

  useEffect(() => {
    fetchArticles().then((response) => {
      console.log(response);
      setArticleList(response);
    });
  }, []);
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
