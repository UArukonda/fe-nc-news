import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Comments from "./Comments";
import { addVotes, fetchSingleArticle } from "../utils/api";
import "../css/singlearticle.css";
import "../css/comments.css";

const SingleArticle = ({ setVotes }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [newVote, setNewVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id).then((response) => {
      setArticle(response);
      setNewVote(response.votes); //set votes from article
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVoteClick = () => {
    if (!hasVoted) {
      setNewVote((prevVote) => prevVote + 1); //increment vote by 1
      setHasVoted(true);

      addVotes(article_id, { inc_votes: 1 }) //increment vote by 1 in database for article
        .then((response) => setVotes(response.votes))
        .catch((err) => {
          console.error("Failed to update votes:", err);
          setNewVote((prevVote) => prevVote - 1);
          setHasVoted(false);
        });
    }
  };

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
          <div className="votes">
            <p>{newVote} Votes</p>
            <button
              id="vote-btn"
              onClick={handleVoteClick}
              disabled={hasVoted}
              style={{
                backgroundColor: hasVoted ? "green" : "blue",
                border: "none",
                padding: "10px 20px",
                cursor: hasVoted ? "not-allowed" : "pointer",
              }}
            >
              Vote
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SingleArticle;
