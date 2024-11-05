import React, { useEffect, useState } from "react";
import { fetchSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Header from "./Header";

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
      <section>
        <ul className="article-card">
          <li>User: {article.author}</li>
          <li>
            <img src={article.article_img_url} alt="" width={"200px"} />
          </li>
          <li>
            <h2>{article.title}</h2>
          </li>
          <li>{article.topic}</li>
          <li>{article.created_at}</li>
          <li>{article.comment_count} Comments</li>
          <li>{article.votes} Likes</li>
        </ul>
      </section>
    </>
  );
};

export default SingleArticle;
