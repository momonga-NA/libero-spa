import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container>
      <h2>
        <span>What is</span>
        <br />
        LIBEROについて
      </h2>
      <div className={styles.contents}>
        <p>ご覧いただきありがとうございます！</p>
        <p>LIBEROは東京の社会人を中心としてた旅行サークルです。</p>
        <p>主な活動は毎月1～2回、有志を募って日帰り旅行をすることです。</p>
        <p>毎日が家と会社の往復で終わっている人</p>
        <p>旅行をしたいけど友達が乗り気でない人</p>
        <p>何か楽しめることを探している人、、、</p>
        <p>非日常を求めてLIBEROに参加してみませんか？</p>
      </div>
    </Container>
  );
};

export default About;
