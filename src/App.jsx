import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Articles } from "./components/Articles";
import { Article } from "./components/Article";

function App() {
  return (
    <section>
      <Header />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Articles />} />
        <Route path={"/articles"} element={<Articles />} />
        <Route path={"/articles/:id"} element={<Article />} />
      </Routes>
    </section>
  );
}

export default App;
