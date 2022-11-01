import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="mainHead">
      <Link to="/">
        <h1>Welcome to nc-njus</h1>
      </Link>
    </header>
  );
};

export default Header;
