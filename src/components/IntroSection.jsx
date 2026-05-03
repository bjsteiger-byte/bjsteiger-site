import poolExample from "../assets/pool_example.png";
import Typography from "@mui/material/Typography";
import CaptionedImage from "./CaptionedImage";

export default function IntroSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        The Problem
      </Typography>
      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        Billiards (pool) is a relatively simple game from a physics perspective.
        Ignoring any advanced techniques we are directly able to predict the cue
        ball travel direction based on the pool cue positioning. Additionally -
        we can infer the travel direction of the ball hit by the cue ball based
        on the initial position of the cue and cue ball.
        <br />
        <br />
        The goal of this project is to use object detection techniques to
        predict the trajectory of the pool ball given the cue ball and pool cue
        location prior to the cue ball being hit.
      </Typography>

      <br />
      <br />

      <CaptionedImage
        src={poolExample}
        caption={
          <>
            <strong>Fig 1:</strong> Example of top down pool shot taken from
            youtube video. The ball hit goes into the top right pocket.
          </>
        }
      />

      <br />
      <br />

      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        Motivation
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        My primary motivation for picking this problem is that it is at an
        interesting intersection of classical mechanics, computer vision, and
        “sports”. Additionally, This project presents an approachable challenge
        that can be easily made more difficult as constraints on the problem
        space are relaxed. For example, many games of pool are actually recorded
        looking down at the table from a slight angle making 2D assumptions in
        the top down view invalid. This will ensure that I can incrementally
        deliver based on early learnings.
        <br />
        <br />
        What I also find interesting about this problem is that there are
        actually multiple techniques that I can apply in this setting. While the
        most obvious would be utilizing YOLO object detection systems, it would
        also be possible to utilize the Hough Transform as pool balls are
        perfectly round.
        <br />
        <br />
        It is also evident that this work is broadly applicable to other object
        detection and motion prediction work with self-driving cars, robotics,
        and sports.
      </Typography>
    </>
  );
}
