import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchArticles } from "./api";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";

function App() {

  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <section>
      <Header />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Articles articles={articles} setArticles={setArticles} />} />
        <Route path={"/articles"} element={<Articles topic={topic}  articles={articles} setArticles={setArticles} />} />
        <Route path={"/articles/:id"} element={<Article  selectedArticle={articles} />}/>
      </Routes>
    </section>
  );
}

export default App;
