import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledMain = styled("main")(({ theme }) => ({
  position: "absolute",
  top: "0",
  bottom: "0",
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  textAlign: "left",
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain
      sx={{
        padding: { xs: "40px 40px 45px 40px", xl: "100px 40px 60px 40px" },
      }}
    >
      {children}
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 12,
          left: "40%",
        }}
      >
        <Typography variant="body2" marginRight={8}>
          created by Megan Swanby
        </Typography>

        <Typography variant="body2">
          <a href="https://www.github.com/nycswan">source code</a>
        </Typography>
      </footer>
    </StyledMain>
  );
}
