import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./components/Template";

const AppLayout = () => {
  return <Template />;
};

const root = document.getElementById("app");

const rootElement = ReactDOM.createRoot(root);

rootElement.render(<AppLayout />);
