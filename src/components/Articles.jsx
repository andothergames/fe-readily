import { useEffect, useState } from "react";
import { fetchArticles, fetchArticle } from "../api";
import { ArticleCard } from "./ArticleCard";
import { Article } from "./Article";

export const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  const handleArticleSelect = (id) => {
    fetchArticle(id).then((article) => {
      setArticles([article]);
    });
  };

  return (
    <section>
      {articles.length === 1 ? (
        <Article selectedArticle={articles[0]} />
      ) : (
        <ul className="cards">
          {articles.map((article) => (
            <ArticleCard
              article={article}
              key={article.article_id}
              onClick={() => handleArticleSelect(article.article_id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
