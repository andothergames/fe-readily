export const Article = ({selectedArticle}) => {

    return (
      <section className="article-post">
        <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
        <h3>{selectedArticle.title}</h3>
        <p>
        <span>Topic: {selectedArticle.topic} </span>
        <span>·</span>
        <span>By: {selectedArticle.author}</span>
        <span>·</span>
        <span>Votes: {selectedArticle.votes}</span>
        <span>·</span>
        <span>Comments: {selectedArticle.comment_count}</span></p>
        <p>{selectedArticle.body}</p>
      </section>
    );
  };
  