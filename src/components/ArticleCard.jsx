import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <header>
        <p>User: {article.author}</p>
      </header>
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt={article.title} width="200" />
      </Link>
      <section>
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
      </section>
      <footer>
        <p>{article.comment_count} Comments</p>
        <p>{article.votes} Votes</p>
      </footer>
    </div>
  );
};

export default ArticleCard;
