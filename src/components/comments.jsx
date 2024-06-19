import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";

export const Comments = ({ id, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isCommentPosted, setIsCommentPosted] = useState(false);
  const [apiFeedback, setApiFeedback] = useState(false);

  const handleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchComments(id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [apiFeedback]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="comments">
      {!isCommentPosted ? (
        <button onClick={handleCommentForm}>
          Comment <i className="bi bi-chat-left"></i>
        </button>
      ) : null}
      {showCommentForm ? (
        <CommentForm
          article_id={id}
          isCommentPosted={isCommentPosted}
          setIsCommentPosted={setIsCommentPosted}
          showCommentForm={showCommentForm}
          setShowCommentForm={setShowCommentForm}
          setApiFeedback={setApiFeedback}
        />
      ) : null}
      {isCommentPosted ? <p>Your comment has been posted</p> : null}
      <h3>Comments</h3>

      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};
