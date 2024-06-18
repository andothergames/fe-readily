import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, []);

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
