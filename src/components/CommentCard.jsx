import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { dateConverter } from "../utils/dateConverter";
import { deleteComment } from "../api";

export const CommentCard = ({ comment, setDeleteMessage, triggerRefresh }) => {
  const { user } = useContext(UserContext);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(comment.author === user);
  }, [comment.author, user]);

  const handleDelete = (id, author) => {
    if (user === author) {
      deleteComment(id)
        .then((res) => {
          setDeleteMessage(res);
          setTimeout(() => {
            triggerRefresh();
          }, 2000);
        })
        .catch((err) => {
          setDeleteMessage(err);
        });
    }
  };
  return (
    <li className="comment-card">
      <button
        disabled={!isValid}
        className="delete-user-btn"
        onClick={() => handleDelete(comment.comment_id, comment.author)}
      >
        <i className="bi bi-x-square"></i>
      </button>
      <p>{comment.body}</p>
      <span>Votes: {comment.votes}</span>
      <span>·</span>
      <span>Made: {dateConverter(comment.created_at)}</span>
      <span>·</span>
      <span>By: {comment.author}</span>
    </li>
  );
};
