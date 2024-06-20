import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;

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
