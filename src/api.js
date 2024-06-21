import axios from "axios";

const readilyAPI = axios.create({
  baseURL: "https://article-feed.onrender.com/api",
});

export const fetchArticles = (slug, sort, order) => {
  const params = {params: {}}
  if(slug) params.params.topic = slug;
  if(sort) params.params.sort_by = sort;
  if(order) params.params.order = order;
  return readilyAPI
    .get("/articles", params)
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

export const deleteComment = (id) => {
  return readilyAPI.delete(`comments/${id}`).then((res) => {
    return "Comment Deleted";
  })
}

export const fetchTopics = () => {
  return readilyAPI.get('topics').then((res) => {
    return res.data;
  })
}