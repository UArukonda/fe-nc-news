import React, { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response);
    });
  }, []);
  return (
    <div className="comments-box`">
      <div className="comments">
        {comments.map((comment) => {
          return (
            <>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
