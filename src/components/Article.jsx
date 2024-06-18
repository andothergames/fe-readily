import { useEffect, useState } from "react";
import { fetchArticle } from "../api";
import { patchArticle } from "../api";
import { dateConverter } from "../utils/dateConverter";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [voteChange, setVoteChange] = useState(0);
  const [thumbsUp, setThumbsUp] = useState("bi bi-hand-thumbs-up");
  const [thumbsDown, setThumbsDown] = useState("bi bi-hand-thumbs-down");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(id).then((article) => {
      setIsLoading(false);
      setSelectedArticle(article);
      setVotes(article.votes);
    });
  }, []);

  const handlePlusVote = () => {
    setVoteChange(1);
    setThumbsUp("bi bi-hand-thumbs-up-fill");
    setThumbsDown("bi bi-hand-thumbs-down");
  };

  const handleMinusVote = () => {
    setVoteChange(-1);
    setThumbsDown("bi bi-hand-thumbs-down-fill");
    setThumbsUp("bi bi-hand-thumbs-up");
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

  return (
    <section>
      <section className="article-post">
        <img
          src={selectedArticle.article_img_url}
          alt={selectedArticle.title}
        />
        <h3>{selectedArticle.title}</h3>
        <p className="article-details">
          <span>Topic: {selectedArticle.topic} </span>
          <span>·</span>
          <span>By: {selectedArticle.author}</span>
          <span>·</span>
          <span>{dateConverter(selectedArticle.created_at)}</span>
        </p>
        <span className="votes">
          <i className={thumbsUp} onClick={handlePlusVote}></i>
          {votes}
          <i className={thumbsDown} onClick={handleMinusVote}></i>
        </span>
        <p>{selectedArticle.body}</p>
      </section>
      <section className="comments">
        <h3>Comments ({selectedArticle.comment_count}):</h3>
        <Comments id={id} />
      </section>
    </section>
  );
};
