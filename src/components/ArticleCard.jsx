export const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};
