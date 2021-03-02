import Image1 from "./img/e1_itinerary1.jpg";
import Image2 from "./img/e1_itinerary2.jpg";
import Image3 from "./img/e1_itinerary3.jpg";
import Image4 from "./img/e2_itinerary1.jpg";
import Image5 from "./img/e2_itinerary2.jpg";
import Image6 from "./img/e2_itinerary3.jpg";


const itinerary1 = [
  {
    time: "08:00",
    location: "東京",
  },
  {
    time: "10:00～11:30",
    location: "成田ゆめ牧場",
    image: Image1,
  },
  {
    time: "12:30～13:30",
    location: "水郷佐原",
    image: Image2,
  },
  {
    time: "14:30～16:30",
    location: "犬吠埼灯台",
    image: Image3,
  },
  {
    time: "19:00",
    location: "東京",
  }  
];

const itinerary2 = [
  {
    time: "07:00",
    location: "東京",
  },
  {
    time: "09:00～11:00",
    location: "奥庭自然公園",
    image: Image4,
  },
  {
    time: "14:00～15:30",
    location: "白糸の滝",
    image: Image5,
  },
  {
    time: "16:30～17:30",
    location: "富士浅間神社",
    image: Image6,
  },
  {
    time: "19:30",
    location: "東京",
  }  
];

const itineraryDatas = [
  itinerary1,
  itinerary2
];

export default itineraryDatas;