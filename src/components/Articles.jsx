import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const Articles = ({ sort, order }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sort, order)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.msg);
        setIsLoading(false);
      });
  }, [topic, sort, order]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <section>
      <ul className="cards">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </ul>
    </section>
  );
};
