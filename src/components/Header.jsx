import icon from "/readily-icon-black.png";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };
  return (
    <header>
      <img
        src={icon}
        onClick={returnHome}
        className="logo"
        alt="readily icon"
      />
      <h1 onClick={returnHome}>Readily</h1>
    </header>
  );
};
