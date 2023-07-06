import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);


/*
            <div className="empty"></div>
            <div className="tile tile1"></div>
            <div className="tile tile2"></div>
            <div className="tile tile3"></div>
            <div className="tile tile4"></div>
            <div className="tile tile5"></div>
            <div className="tile tile6"></div>
            <div className="tile tile7"></div>
            <div className="tile tile8"></div>
            <div className="tile tile9"></div>
            <div className="tile tile10"></div>
            <div className="tile tile11"></div>
            <div className="tile tile12"></div>
            <div className="empty"></div>
            <div className="tile tile13"></div>
            <div className="tile tile14"></div>
            <div className="tile tile15"></div>
            <div className="tile tile16"></div>
            <div className="tile tile17"></div>
            <div className="tile tile18"></div>
            <div className="tile tile19"></div>
            <div className="tile tile20"></div>
            <div className="tile tile21"></div>
            <div className="tile tile22"></div>
            <div className="tile tile23"></div>
            <div className="tile tile24"></div>
            <div className="tile tile25"></div>
            <div className="tile tile26"></div>
            <div className="tile tile27"></div>
            <div className="tile tile28"></div>
            <div className="tile tile29"></div>
            <div className="tile tile30"></div>
            <div className="tile tile31"></div>
            <div className="tile tile32"></div>
            <div className="tile tile33"></div>
            <div className="tile tile34"></div>
            <div className="tile tile35"></div>
            <div className="tile tile36"></div>
            <div className="tile tile37"></div>
            <div className="tile tile38"></div>
            <div className="tile tile39"></div>
            <div className="tile tile40"></div>
            <div className="empty"></div>
            <div className="tile tile41"></div>
            <div className="tile tile42"></div>
            <div className="tile tile43"></div>
            <div className="tile tile44"></div>
            <div className="tile tile45"></div>
            <div className="tile tile46"></div>
            <div className="tile tile47"></div>
            <div className="tile tile48"></div>
            <div className="tile tile49"></div>
            <div className="tile tile50"></div>
            <div className="tile tile51"></div>
            <div className="tile tile52"></div>
            <div className="empty"></div>

            */
