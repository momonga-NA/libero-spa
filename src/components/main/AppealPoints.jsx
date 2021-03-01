import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Appeal1 from "./img/appeal1.jpg";
import Appeal2 from "./img/appeal2.jpg";
import Appeal3 from "./img/appeal3.jpg";
import styles from "./AppealPoints.module.css";

const AppealPoints = () => {
  return (
    <Container>
      <h2>
        <span>Feature</span>
        <br />
        LIBEROの特徴
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img
            className={styles.appeal_img}
            src={Appeal1}
            alt="アピールポイント1"
          />
          <Typography
            className={styles.appeal_title}
            variant="body2"
            gutterBottom
          >
            会費は一切無料！
          </Typography>
          <p>LIBEROでは会費は一切とりません！</p>
          <p>かかるのは自分が行きたい活動の参加費のみ。</p>
          <p>
            基本的にリーズナブルな費用になるよう工面しており、1回あたりの活動で5,000円～8,000円ほどになります。
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            className={styles.appeal_img}
            src={Appeal2}
            alt="アピールポイント2"
          />
          <Typography
            className={styles.appeal_title}
            variant="body2"
            gutterBottom
          >
            メンバーは20代前半～中盤
          </Typography>
          <p>LIBEROのメンバーは全員20代前半～中盤です。</p>
          <p>
            エネルギッシュなメンバーが多く、早朝6時から活動開始なんてことも結構あります。
          </p>
          <p>
            旅行も楽しみながら、友達も作りたい！ そんな人をお待ちしています！
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            className={styles.appeal_img}
            src={Appeal3}
            alt="アピールポイント3"
          />
          <Typography
            className={styles.appeal_title}
            variant="body2"
            gutterBottom
          >
            行動範囲は日帰り(24時間)で行ける限り
          </Typography>
          <p>
            LIBEROの活動範囲は1都3県だけにとどまらず、静岡・長野・新潟・福島など様々です。
          </p>
          <p>
            基本的に日帰りで帰れるならどこでも行きます。(まれに泊まりになります)
          </p>
          <p>
            1人じゃなかなか行けないような人気スポットや絶景も、LIBEROでならば訪れることができるかもしれません。
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppealPoints;
