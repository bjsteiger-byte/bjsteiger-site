import Box from "@mui/material/Box";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <Box sx={{ px: 4, py: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      ></Box>
    </Box>
  );
}
