import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      <ul className="cards">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
};
