import axios from "axios";

const readilyAPI = axios.create({
  baseURL: "https://article-feed.onrender.com/api",
});

export const fetchArticles = (topicQ) => {
  return readilyAPI
    .get("/articles", {
      params: {
        topic: topicQ,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticle = (id) => {
  return readilyAPI.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
};

export const fetchComments = (id) => {
  return readilyAPI.get(`articles/${id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticle = (id, body) => {
  return readilyAPI.patch(`/articles/${id}`, body).then((res) => {
    return res.data.votes
  })
}

export const fetchUsers = () => {
  return readilyAPI.get('users').then((res) => {
    return res.data;
  })
}

export const postComment = (id, body) => {
  return readilyAPI.post(`articles/${id}/comments`, body).then((res) => {
    return res.data;
  })
}