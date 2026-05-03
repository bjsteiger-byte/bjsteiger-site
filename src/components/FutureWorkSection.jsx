import Typography from "@mui/material/Typography";

export default function FutureWorkSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        Future Work
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        The most obvious focus for improving this styem will be imporving the
        vision model (to improve the accuracy). In current state the system is
        highly variable based on how the cue tip angle is measured. To make this
        system viable the YOLO model either needs additional training or more
        likely a hybrid approach between YOLO and something like line detection
        needs to be used. Something that utilzes edges/lines is likely to be
        more precise than using a computer vision model.
      </Typography>

      <br />
      <br />

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        Following this - I'd like to explore making this system more adaptable
        to alternative angles rather than just top-down views. Being able to
        utilize 3D transofmrations and/or homography would be a complex and
        interesting problem that would really give this system some level of
        real world usability.
      </Typography>
    </>
  );
}
