import React, { useEffect } from "react";
import { deleteComment, fetchComments } from "../utils/api";

const Comments = ({ article_id, comments, setComments }) => {
  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response || []);
    });
  }, [article_id]);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment">
            <p className="comment-author">{comment.author}</p>
            <p className="comment-body">{comment.body}</p>
            <button onClick={() => handleDelete(comment.comment_id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
};

export default Comments;
