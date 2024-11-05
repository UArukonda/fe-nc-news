import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  console.log(article.article_id);
  return (
    <>
      <ul className="article-card">
        <li>User: {article.author}</li>
        <Link to={`/articles/1`}>
          <img src={article.article_img_url} alt="" width={"200px"} />
        </Link>
        <li>
          <h2>{article.title}</h2>
        </li>
        <li>{article.topic}</li>
        <li>{article.created_at}</li>
        <li>{article.comment_count} Comments</li>
        <li>{article.votes} Likes</li>
      </ul>
    </>
  );
};

export default ArticleCard;
