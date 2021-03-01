import {
  makeStyles,
  createStyles,
  Container,
  GridList,
  GridListTile,
} from "@material-ui/core";
import React from "react";
import Image1 from "./img/tile1.jpg";
import Image2 from "./img/tile2.jpg";
import Image3 from "./img/tile3.jpg";
import Image4 from "./img/tile4.jpg";
import Image5 from "./img/tile5.jpg";
import Image6 from "./img/tile6.jpg";
import Image7 from "./img/tile7.jpg";
import Image8 from "./img/tile8.jpg";
import Image9 from "./img/tile9.jpg";
import Image10 from "./img/tile10.jpg";
import Image11 from "./img/tile11.jpg";
import Image12 from "./img/tile12.jpg";

const tiles = [
  {
    img: Image1,
    cols: 2,
    title: "image1",
  },
  {
    img: Image2,
    cols: 1,
    title: "image2",
  },
  {
    img: Image3,
    cols: 3,
    title: "image3",
  },
  {
    img: Image4,
    cols: 3,
    title: "image4",
  },
  {
    img: Image5,
    cols: 2,
    title: "image5",
  },
  {
    img: Image6,
    cols: 1,
    title: "image6",
  },
  {
    img: Image7,
    cols: 1,
    title: "image7",
  },
  {
    img: Image8,
    cols: 2,
    title: "image8",
  },
  {
    img: Image9,
    cols: 3,
    title: "image9",
  },
  {
    img: Image10,
    cols: 2,
    title: "image10",
  },
  {
    img: Image11,
    cols: 2,
    title: "image11",
  },
  {
    img: Image12,
    cols: 2,
    title: "image12",
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    gridList: {
      width: "100%",
      height: 450,
      overflow: "scroll",
    },
  })
);

const PhotoLibrary = () => {
  const styles = useStyles();
  return (
    <Container>
      <h2>
        <span>PhotoLibrary</span>
        <br />
        活動写真
      </h2>
      <GridList
        cellHeight={180}
        cols={6}
        className={styles.gridList}
        spacing={1}
      >
        {tiles.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export default PhotoLibrary;
