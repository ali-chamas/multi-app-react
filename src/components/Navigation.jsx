import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex gap center">
      <button className="bg-primary  nav-btn" onClick={() => navigate("/")}>
        <TiWeatherPartlySunny />
      </button>
      <button
        className="bg-primary  nav-btn"
        onClick={() => navigate("/calculator")}
      >
        <FaCalculator />
      </button>
      <button
        className="bg-primary  nav-btn"
        onClick={() => navigate("/sticky-notes")}
      >
        <FaRegStickyNote />
      </button>
    </nav>
  );
};

export default Navigation;
