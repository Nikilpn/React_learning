import * as React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
      <header className="header">
        <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
          <h1>TechFlix</h1>
        </Link>
        <Link to="/logout">
          <button className="log-out-button">Log out</button>
        </Link>
      </header>
    </>
  );
};

export default Header;
