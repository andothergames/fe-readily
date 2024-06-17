import { Link } from "react-router-dom";
import { Articles } from "./Articles";

export const Nav = () => {
  return (
    <nav>
      <p>Links will be here</p>

      <Link to="/" element={<Articles />}>
        <button>All articles</button>
      </Link>
    </nav>
  );
};
