import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { CommentCard } from "./CommentCard";

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
};
