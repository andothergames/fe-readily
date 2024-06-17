

export const Article = ({ selectedArticle }) => {
    const a = selectedArticle[0]

    return (
      <section className="article-post">
        <img src={a.article_img_url} alt={a.title} />
        <h3>{a.title}</h3>
        <p>
        <span>Topic: {a.topic} </span>
        <span>·</span>
        <span>By: {a.author}</span>
        <span>·</span>
        <span>Votes: {a.votes}</span>
        <span>·</span>
        <span>Comments: {a.comment_count}</span></p>
        <p>{a.body}</p>
      </section>
    );
  };
  