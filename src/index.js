import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css';
// ↓「% npm install react-bootstrap bootstrap」を実行したのちimportをindex.jsで記述
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  // <React.StrictMode>をコメントアウトしないと「findDOMNode is deprecated in StrictMode...」というWarningが出てしまう
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  // ↓publicフォルダに入っているindex.htmlのid=rootのHTML要素をこのindex.jsの中身で置き換えますよ、という意味
  document.getElementById("root")
);
