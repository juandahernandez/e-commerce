import React from "react";
import { Link } from "react-router-dom";
import "./Presentation.styles.css";

const Presentation = () => {
  return (
    <div className="first-page">
      <div>
        <img
          className="logo"
          src="https://cryinggrumpies.files.wordpress.com/2015/07/crying-grumpies-netrunner-camaleon-baraja-the-grumpy-shop.jpg?w=584"
          alt="camaleon"
          width="100px"
          height="100px"
        />
      </div>
      <div className="title">
        <h1>Pinturas JD</h1>
        <div className="div-button">
          <Link to="/Products">
            <button className="btn btn-link ">Ver Productos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
