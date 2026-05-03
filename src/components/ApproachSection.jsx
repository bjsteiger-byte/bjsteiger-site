import labeledImage from "../assets/labeled_image.png";
import step1Image from "../assets/step_1.png";
import step2Image from "../assets/step_2.png";
import step3Image from "../assets/step_3.png";
import step4Image from "../assets/step_4.png";
import step5Image from "../assets/step_5.png";
import step6Image from "../assets/step_6.png";
import step7Image from "../assets/step_7.png";
import step8Image from "../assets/step_8.png";

import Typography from "@mui/material/Typography";
import CaptionedImage from "./CaptionedImage";

export default function ApproachSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        Approach
      </Typography>

      <br />
      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Object Detection
      </Typography>
      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        The first part of this problem is identifying the locations of the cue
        ball, pool balls, and pool cue. Additionally in order to be able to
        predict the trajectory of the cue ball, I need the angle of the pool
        cue.
        <br />
        <br />
        For this work I decided to fine tune a YOLO model for the classes of
        "pool ball" and "cue tip". Using the YOLO model that supports object
        orientation, I was able to extract the information I need for trajectory
        prediction.
      </Typography>
      <br />

      <CaptionedImage
        src={labeledImage}
        caption={
          <>
            <strong>Fig 2.</strong> Image labeled by fine tuned YOLO model.
          </>
        }
      />

      <br />
      <br />

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        In fine tunning the YOLO model, I labeled approximately 300 images
        manually from top down pool games from YouTube. In hindsight there is
        certainly a limitation in human ability to properly create bounding
        boxes at the exact angle of a pool cue. This will inevitibly create
        inaccuracy in the predicted angle later on.
        <br />
        <br />
        There is a special case in this for identifying the cue ball since there
        is not a separte class in the fine tuned YOLO model. For this I utilzied
        a weighted sum between the color value and the "closeness" of the ball
        to the pool cue tip. The closeness was simply the distance and alignment
        with the cue tip. This was accurate enough for the shot prediction, but
        wasn't consistent when the pool cue was not in frame and also makes the
        assumption that the player is following the rules.
      </Typography>

      <br />
      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Trajectory Prediction
      </Typography>
      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        To predict trajectory of the cue ball and the hit ball we need to
        identify where the collision will happen and draw a vector straight
        through the center line of both balls where they collide. The step by
        step process is detailed below:
      </Typography>

      <br />

      <CaptionedImage
        src={step1Image}
        caption={
          <>
            <strong>Step 1. </strong> Identify the position of the cue ball C,
            any other balls (B and F in this case) and the direction/angle of
            the clue ball + cue tip
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step2Image}
        caption={
          <>
            <strong>Step 2. </strong> Recenter the coordinate system around the
            cue ball. Additionally you can calculate the unit direction vector D
            as the trajectory of the ball via the angle theta (cue tip angle).
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step3Image}
        caption={
          <>
            <strong>Step 3. </strong> Utilze the direction vector D to calculate
            the dot product with ball locations. This will provide a
            positive/negative values. This will allow you to filter out balls
            that are not in the direction you are hitting (negative values).
            Note: due to limiations of YOLO angles - we need to check both
            directions of the long axis. Realistically - there shouldn't be
            balls behined the pool cue as there needs to be physical room for
            the cue.
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step4Image}
        caption={
          <>
            <strong>Step 4. </strong> you can utilize the value provided by the
            dot product to each ball to figure out how far along the trajectory
            the balls will be closest together.
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step5Image}
        caption={
          <>
            <strong>Step 5. </strong> with the dot product value you can
            determine if the perpendicular distance P is less than 2r (2 times
            the radius of a pool ball).
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step6Image}
        caption={
          <>
            <strong>Step 6. </strong> with the 2r value and p - you can create a
            triangle to calculate the distance t down the trajectory where the
            ghost ball center will be.
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step7Image}
        caption={
          <>
            <strong>Step 7. </strong> from the values T and t you are able to
            find where along T the ghost ball is and utilzie that to convert
            back to the global coordinate system.
          </>
        }
      />
      <br />
      <br />

      <CaptionedImage
        src={step8Image}
        caption={
          <>
            <strong>Step 8. </strong> from here we can caluclate the hit vector
            as the vector through the center of both balls. This can be further
            normalized if desired.
          </>
        }
      />

      <Typography
        compontent="div"
        sx={{ flexGrow: 1 }}
        align="left"
      >
        Code related to testing & implementation can be found here: https://github.com/bjsteiger-byte/cs766-project
      </Typography>
    </>
  );
}
