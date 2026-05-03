import Typography from "@mui/material/Typography";

export default function ReferencesSection() {
  return (
    <>
      <Typography variant="h4" compontent="div" sx={{ flexGrow: 1 }}>
        References
      </Typography>

      <Typography compontent="div" sx={{ flexGrow: 1 }} align="left">
        Pool theory: https://ekiefl.github.io/2020/04/24/pooltool-theory/
        <br />
        <br />
        [1]Jonas Myhre Schiøtt. Viktor Sebastian Petersen. Dim P. Papadopoulos,
        "pix2pockets: Shot Suggestions in 8-Ball Pool from a Single Image in the
        Wild," 2025.
      </Typography>
    </>
  );
}
