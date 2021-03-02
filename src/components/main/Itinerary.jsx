import React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  Timeline,
} from "@material-ui/lab/";
import { withStyles } from "@material-ui/core";

import style from "./Itinerary.module.css";

const StyledTimelineOppositeContent = withStyles({
  root: { flex: 0, padding: "0" },
})(TimelineOppositeContent);

const StyledTimelineContent = withStyles({
  root: { paddingRight: "6px", marginBottom: "30px" },
})(TimelineContent);

const Itinerary = ({ itinerary }) => {
  return (
    <>
      <div className={style.container}>
        <Timeline>
          {itinerary.map((spot, index) => (
            <TimelineItem key={index}>
              <StyledTimelineOppositeContent />
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <StyledTimelineContent>
                <div className={style.timeline_item}>
                  <span>{spot.time}</span>
                  <span>{spot.location}</span>
                  {spot.image && <img src={spot.image} alt={spot.location} />}
                </div>
              </StyledTimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
};

export default Itinerary;
