import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, []);

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
