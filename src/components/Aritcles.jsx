import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Header from "./Header";

const Articles = ({ articleList, setArticleList }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((response) => {
      setArticleList(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section>
        <ul className="article-list">
          {articleList.map((article) => (
            <ArticleCard article={article} key={article.article_id} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Articles;
