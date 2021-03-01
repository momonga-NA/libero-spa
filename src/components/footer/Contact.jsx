import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Container>
      <h2>
        <span>How to Contact</span>
        <br />
        お問い合わせ方法
      </h2>
      <div className={styles.contact}>
        <p>ご応募は「つなげーと」よりお願いします！</p>
        <a
          href="https://tunagate.com/circle/11308"
          target="_blank"
          rel="noreferrer"
        >
          https://tunagate.com/circle/11308
        </a>
      </div>
    </Container>
  );
};

export default Contact;
