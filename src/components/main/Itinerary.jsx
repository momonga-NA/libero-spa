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
          <TimelineItem>
            <StyledTimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>
              <p>ddd</p>
            </StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>
              <p>ddd</p>
            </StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>
              <p>ddd</p>
            </StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <StyledTimelineContent>
              <p>ddd</p>
            </StyledTimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Itinerary;
