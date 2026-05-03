import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CaptionedImage({ src, caption }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        textAlign: "center",
        maxWidth: 500,
        width: "100%",
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{ width: "100%", maxWidth: "1200px", display: "block" }}
      />
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mt: 0.5, display: "block" }}
        align="left"
      >
        {caption}
      </Typography>
    </Box>
  );
}
