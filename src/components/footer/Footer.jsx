import React from "react";
import style from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className={style.footer}>
      <a
        href="https://www.instagram.com/circle_libero/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
    </div>
  );
};

export default Footer;
