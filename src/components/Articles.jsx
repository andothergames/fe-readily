import { useEffect, useState } from "react";
import { fetchArticles, fetchArticle } from "../api";
import { ArticleCard } from "./ArticleCard";
import { Article } from "./Article";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  const handleArticleSelect = (selectedArticle) => {
    fetchArticle(selectedArticle).then((article) => {
      setSelectedArticle(article)
    })
  }

  return (
    <section>
        {selectedArticle ? 
            <Article selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
        :
      <ul className="cards">
        {articles.map((article) => {
          return <ArticleCard
              article={article}
              key={article.article_id}
              onClick={() => handleArticleSelect(article.article_id)}
            />
        })}
      </ul>}
    </section>
  );
};
