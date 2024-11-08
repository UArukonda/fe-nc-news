import React, { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Header from "./Header";
import { sortArticles } from "../utils/api";

const Articles = ({ articleList, setArticleList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("asc");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then((response) => {
        setArticleList(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`${err.status} Failed to fetch articles. Please try again.`);
      });
  }, []);

  useEffect(() => {
    sortArticles(sortBy, orderBy)
      .then((data) => setArticleList(data))
      .catch((error) => {
        console.log(err);
      });
  }, [sortBy, orderBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>

        <label htmlFor="order">Order By:</label>
        <select id="order" value={orderBy} onChange={handleOrderChange}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
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
