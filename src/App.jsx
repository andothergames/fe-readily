import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";

function App() {

  const [topic, setTopic] = useState("");
  return (
    <section>
      <Header />
      <Nav topic={topic} setTopic={setTopic}/>
      <Routes>
        <Route path={"/"} element={<Articles topic={topic}/>} />
        <Route path={"/articles"} element={<Articles />} />
        <Route path={"/articles/article/:id"} element={<Article />} />
        <Route path={"/articles/:topic"} element={<Articles />} />
      </Routes>
    </section>
  );
}

export default App;
