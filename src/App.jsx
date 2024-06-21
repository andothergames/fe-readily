import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";
import { ErrorPage } from "./components/ErrorPage";

function App() {

  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  return (
    <section>
      <Header />
      <Nav setTopic={setTopic} setSort={setSort} setOrder={setOrder}/>
      <Routes>
        <Route path={"/"} element={<Articles topic={topic} sort={sort} order={order}/>} />
        <Route path={"/articles"} element={<Articles  sort={sort} order={order} />} />
        <Route path={"/articles/article/:id"} element={<Article />} />
        <Route path={"/articles/:topic"} element={<Articles sort={sort} order={order} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
  );
}

export default App;
