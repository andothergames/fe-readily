import { dateConverter } from "../utils/dateConverter";

export const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p>{comment.body}</p>
      <span>Votes: {comment.votes}</span>
      <span>·</span>
      <span>Made: {dateConverter(comment.created_at)}</span>
      <span>·</span>
      <span>By: {comment.author}</span>
    </li>
  );
};
