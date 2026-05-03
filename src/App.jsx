import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./App.css";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import BottomBar from "./components/BottomBar";
import StateOfArtSection from "./components/StateOfArtSection";
import ApproachSection from "./components/ApproachSection";
import ResultsSection from "./components/ResultsSection";
import FutureWorkSection from "./components/FutureWorkSection";
import ReferencesSection from "./components/ReferencesSection";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Billiards Trajectory Projection
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }} align="right">
            Brandon Steiger (bjsteiger@wisc.edu)
          </Typography>
        </Toolbar>
      </AppBar>
      <Hero />

      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        <IntroSection />

        <br />
        <br />

        <StateOfArtSection />

        <br />
        <br />

        <ApproachSection />

        <br />
        <br />

        <ResultsSection />

        <br />
        <br />

        <FutureWorkSection />

        <br />
        <br />

        <ReferencesSection />

        <br />
        <br />
      </Box>

      <BottomBar />
    </>
  );
}

export default App;
