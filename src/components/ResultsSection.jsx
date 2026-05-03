import zoomedInFail from "../assets/zoomed_in_fail.png";
import expectedLinesCompare from "../assets/expected_lines_compare.png";
import summaryStats from "../assets/summary_stats.png";

import Typography from "@mui/material/Typography";
import CaptionedVideo from "./CaptionedVideo";
import CaptionedImage from "./CaptionedImage";

export default function ResultsSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        Results
      </Typography>
      
        <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Short Demo
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        The following clip shows one of the success cases of the completed
        systems. The ball circled in red is what the system calculates to be the
        cue ball. The arrows shown provide the predicted trajectory of the
        balls.
      </Typography>

      <CaptionedVideo
        src="https://www.youtube.com/embed/TDXKFWAIaxY?si=gprvnY_vDWJoQG3C"
        title="Video 1: System demonstration"
        caption={
          <>
            <strong>Video 1. </strong> Short video demonstration of the finished
            pool prediction system from a top-down view.
          </>
        }
      />

      <br />
      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Limitations
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        As shown in the clip - the results are generally good for short to
        medium shots. However there are obviously some limitations, most of the
        limitations seem to be based on limmitations in the computer vision
        model angle accuracy.
      </Typography>

      <CaptionedVideo
        src="https://www.youtube.com/embed/XHsygcYZ00o?si=6HMriqLzWViIHgiS"
        title="Video 1: System demonstration"
        caption={
          <>
            <strong>Video 2. </strong> Short video demonstrating some typical
            failures of the computer vision pool prediction system.
          </>
        }
      />

      <br />
      <br />

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        Zooming in on one of the specific failures we can see that the angle
        predicted for the pool cue is slightly incorrect. This compounded over a
        distance causes significant error, especially in the projection of the
        ball hit.
      </Typography>

      <br />
      <br />

      <CaptionedImage
        src={zoomedInFail}
        caption={
          <>
            <strong>Angle prediction error</strong> predicted angle of the pool
            cue tip is not aligned with the cue tip causing significant error.
          </>
        }
      />

      <br />
      <br />

      <CaptionedImage
        src={expectedLinesCompare}
        caption={
          <>
            <strong>Angle prediction error comparison with expected</strong> the
            inferred angle of the pool cue tip causes the predicted angle of
            pool ball to be off by nearly 90 degrees.
          </>
        }
      />

      <br />
      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Summary Statistics
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        The following table shows different metrics evaluated for the system.
        This system was evaluated based on the difference between the actual
        angle the balls traveled and the predicted angle.
      </Typography>

      <br />
      <br />

      <CaptionedImage
        src={summaryStats}
        caption={
          <>
            <strong>Table 1.</strong> Summary statistics for the predicted pool
            shots. Shows high level accuracy of the predicted pool shots.
          </>
        }
      />
    </>
  );
}
