import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Comments from "./Comments";
import { fetchSingleArticle } from "../utils/api";
import "../css/singlearticle.css";
import "../css/comments.css";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <header>
        <p>User: {article.author}</p>
      </header>
      <p>{article.body}</p>
      <div className="single-article">
        <img src={article.article_img_url} alt={article.title} width="200px" />
        <section>
          <h2>{article.title}</h2>
          <p>Topic: {article.topic}</p>
          <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
        </section>
        <footer>
          <p>{article.comment_count} Comments</p>
          <div className="comments-box">
            <Comments article_id={article.article_id} />
          </div>
          <p>{article.votes} Likes</p>
        </footer>
      </div>
    </>
  );
};

export default SingleArticle;
