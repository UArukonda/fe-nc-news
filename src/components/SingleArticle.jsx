import React, { useEffect, useState } from "react";
import { fetchSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id).then((response) => {
      setIsLoading(false);
      setArticle(response);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="article-card">
        <header>
          <p>User: {article.author}</p>
        </header>

        <img src={article.article_img_url} alt={article.title} width="200px" />

        <section>
          <h2>{article.title}</h2>
          <p>Topic: {article.topic}</p>
          <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
        </section>
        <footer>
          <p>{article.comment_count} Comments</p>
          <Comments article_id={article.article_id} />
          <p>{article.votes} Likes</p>
        </footer>
      </div>
    </>
  );
};

export default SingleArticle;
