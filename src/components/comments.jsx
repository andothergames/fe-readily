import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { CommentCard } from "./CommentCard";

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);

  return (
    <section className='comments'>
        <h3>Comments:</h3>
    <ul>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
    </section>
  );
};
