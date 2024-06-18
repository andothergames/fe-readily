import { dateConverter } from "../utils/dateConverter";
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleArticleSelect = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <li
      className="article-card"
      onClick={() => handleArticleSelect(article.article_id)}
    >
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>Made: {dateConverter(article.created_at)}</p>
      <p>Votes: {article.votes}</p>
      <button>
        {article.comment_count} <i className="bi bi-chat-left"></i>
      </button>
    </li>
  );
};
