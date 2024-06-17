import axios from "axios";

const readilyAPI = axios.create({
  baseURL: "https://article-feed.onrender.com/api",
});

export const fetchArticles = () => {
  return readilyAPI.get("/articles").then((res) => {
    return res.data;
  });
};

export const fetchArticle = (id) => {
    return readilyAPI.get(`/articles/${id}`).then((res) => {
      return res.data;
    });
  };
