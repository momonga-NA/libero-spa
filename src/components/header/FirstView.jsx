import React from "react";
import HeaderImg from "./img/header.jpg";
import moduleStyle from "./FirstView.module.css";

const style = {
  backgroundImage: `url(${HeaderImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "60vh",
  position: "relative",
};

const FirstView = () => {
  return (
    <div style={style}>
      <div className={moduleStyle.catch_copy}>
        <p>旅行を趣味にしてみませんか？</p>
      </div>
    </div>
  );
};

export default FirstView;
