import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/weather";
import Calculator from "./pages/calculator";
import StickyNotes from "./pages/sticky";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App children={<Weather />} />} />
        <Route path="/calculator" element={<App children={<Calculator />} />} />
        <Route
          path="/sticky-notes"
          element={<App children={<StickyNotes />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
