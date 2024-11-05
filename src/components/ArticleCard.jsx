import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
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
    </div>
  );
};

export default ArticleCard;
