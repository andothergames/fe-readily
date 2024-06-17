import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Articles } from "./components/Articles";

function App() {
  return (
    <section>
      <Header />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Articles />} />
      </Routes>
    </section>
  );
}

export default App;
