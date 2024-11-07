import React, { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";

const Comments = ({ article_id, comments, setComments }) => {
  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]); // Add article_id as a dependency

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="comment">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-body">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
