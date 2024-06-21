import { useEffect, useState } from "react";
import { fetchArticle, patchArticle } from "../api";
import { dateConverter } from "../utils/dateConverter";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [voteChange, setVoteChange] = useState(0);
  const [isValidUp, setIsValidUp] = useState(false);
  const [isValidDown, setIsValidDown] = useState(false);
  const [thumbsUp, setThumbsUp] = useState("bi bi-hand-thumbs-up");
  const [thumbsDown, setThumbsDown] = useState("bi bi-hand-thumbs-down");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    fetchArticle(id).then((article) => {
      setIsLoading(false);
      setSelectedArticle(article);
      setVotes(article.votes);
    })
    .catch((error) => {
      setErrorMessage(error.response.data.msg);
      setIsLoading(false);
    })
  }, []);

  const handlePlusVote = () => {
    setVoteChange(1);
    setThumbsUp("bi bi-hand-thumbs-up-fill  disable-click");
    setThumbsDown("bi bi-hand-thumbs-down");
    setIsValidUp(true);
  };

  const handleMinusVote = () => {
    setVoteChange(-1);
    setThumbsDown("bi bi-hand-thumbs-down-fill disable-click");
    setThumbsUp("bi bi-hand-thumbs-up");
    setIsValidDown(true);
  };

  useEffect(() => {
    if (voteChange !== 0) {
      patchArticle(id, { inc_votes: voteChange }).then((votes) => {
        setVotes(votes);
        setVoteChange(0);
      });
    }
  }, [voteChange]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <section>
      <section className="article-post">
        <h1>{selectedArticle.title}</h1>
        <section className="article-details">
        <p>
          <span>Topic: {selectedArticle.topic} </span>
          <span>·</span>
          <span>By: {selectedArticle.author}</span>
          <span>·</span>
          <span>{dateConverter(selectedArticle.created_at)}</span>
        </p>
        </section>
        <section className="article-content">
        <img
          src={selectedArticle.article_img_url}
          alt={selectedArticle.title}
          />
          <p className="article-body">{selectedArticle.body}</p>
        </section>
        <span className="votes">
          <i className={thumbsUp}  onClick={handlePlusVote}></i>
          {votes}
          <i className={thumbsDown} onClick={handleMinusVote}></i>
        </span>
      </section>
      <Comments id={id} commentCount={selectedArticle.comment_count}/>
      </section>

  );
};
