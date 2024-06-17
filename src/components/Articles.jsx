import { useEffect, useState } from "react";
import { fetchArticles, fetchArticle } from "../api";
import { Link } from "react-router-dom";
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
           <Link to= {`/articles/${article.article_id}`} key={article.article_id}>
            <ArticleCard
              article={article}
              key={article.article_id}
              onClick={() => handleArticleSelect(article.article_id)} /></Link>))}
        </ul>
      )}
    </section>
  );
};
