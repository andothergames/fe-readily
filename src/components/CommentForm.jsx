import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { UserContext } from "../contexts/UserContext";
import { useState, useEffect, useContext } from "react";
import { fetchUsers } from "../api";
import { postComment } from "../api";

export const CommentForm = ({
  article_id,
  isCommentPosted,
  setIsCommentPosted,
  showCommentForm,
  setShowCommentForm,
  setApiFeedback,
}) => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState(user);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  useEffect(() => {
    setIsValid(author.length && comment.trim().length);
  }, [author, comment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentBody = {
      author: author,
      body: comment,
    };
    setIsCommentPosted(true);
    setShowCommentForm(false);
    postComment(article_id, commentBody)
      .then((comment) => {
        setApiFeedback(true);
      })
      .catch((error) => {
        setIsCommentPosted(false);
        setErrorMessage(error.response.data.msg);
      });
    setComment("");
    setAuthor({user});
  };

  const handleCommentInput = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  if (errorMessage) return <p>{errorMessage}</p>;
  
  return (
    <section className="comment-form">
      <form onSubmit={handleSubmit}>
        <section className="form-cell">
          <InputLabel id="simple-select-label" required>
            User
          </InputLabel>
          <Select
            labelId="user-select-label"
            id="user-select"
            label="User"
            onChange={handleUserInput}
            value={author}
            className="user-dropdown"
          >
            <MenuItem value={user}>
              <em>Select your name</em>
            </MenuItem>
            {users.map((user) => {
              return (
                <MenuItem key={user.username} value={user.username}>
                  {user.username}
                </MenuItem>
              );
            })}
          </Select>

          <section className="form-cell">
            <TextField
              onChange={handleCommentInput}
              value={comment}
              id="comment-field"
              label="Comment"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
            />
          </section>
        </section>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </section>
  );
};
