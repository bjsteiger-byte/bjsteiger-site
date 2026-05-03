import Typography from "@mui/material/Typography";

export default function StateOfArtSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        Current state of the art
      </Typography>

      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Pool Physics
      </Typography>
    <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        As a general background for the physics of pool -{" "}
        <a href="https://ekiefl.github.io/2020/04/24/pooltool-theory/">
          Evan Kiefl's
        </a>{" "}
        github page on the topic gives a good baseline. The main finding from
        this page is the trajectory of a stationary ball when struck by a cue
        ball. This will provide a good starting point for predicted motion of a
        hit ball.
      </Typography>

      <br />
      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Object detection
      </Typography>
      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        In investigating real-time object detection YOLO (You Only Look Once)
        appears as the de facto standard. YOLO provides accurate labeling and
        positioning, while also being low latency. The main obstacle from
        directly applying this will be creating a custom class/training and
        bounding box for a pool cue, pool ball, and cue ball.
        <br />
        <br />
        Given we are using perfectly round objects that have well defined colors
        - it will be possible to utilize a hough transform, however it's
        unlikely to be viable for identifying the pool cue itself.
      </Typography>

      <br />
      <br />

      <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
        Pool & Computer Vision
      </Typography>
      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        Pix2pockets[1] provides a really interesting model of pool table states
        given views at different angles to provide shot suggestions. They
        essentially utilize homography with line estimation to create a 2
        dimensional ball location model from an angled view of a pool table. The
        primary use case documented in this paper is suggesting shots to take
        rather than prediction. The paper does not handle detection of the pool
        cue itself.
      </Typography>
    </>
  );
}
