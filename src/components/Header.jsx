import icon from "/readily-icon.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to='/articles'><img src={icon} className="logo" alt="readily icon" /></Link>
            <h1><Link to='/articles'>Readily</Link></h1>
        </header>
    )
}