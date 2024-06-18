import { useEffect, useState } from "react";
import { fetchArticle } from "../api";
import { dateConverter } from "../utils/dateConverter";
import { Comments } from "./comments";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    fetchArticle(id).then((article) => {
      setSelectedArticle(article);
    });
  }, []);

  if (!selectedArticle.title) {
    return <div>Loading...</div>;
  } else {
    return (
      <section>
        <section className="article-post">
          <img
            src={selectedArticle.article_img_url}
            alt={selectedArticle.title}
          />
          <h3>{selectedArticle.title}</h3>
          <p>
            <span>Topic: {selectedArticle.topic} </span>
            <span>·</span>
            <span>By: {selectedArticle.author}</span>
            <span>·</span>
            <span>{dateConverter(selectedArticle.created_at)}</span>
            <span>·</span>
            <span>Votes: {selectedArticle.votes}</span>
            <span>·</span>
            <span>Comments: {selectedArticle.comment_count}</span>
          </p>
          <p>{selectedArticle.body}</p>
        </section>
        <section></section>
        <Comments id={id} />
      </section>
    );
  }
};
