import { styled } from "@mui/system";

const StyledMain = styled("main")({});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain
      sx={{
        position: "absolute",
        top: "0",
        bottom: "0",
        backgroundColor: "background.default",
        overflow: "hidden",
        padding: { xs: "40px 40px 45px 40px", xl: "100px 40px 60px 40px" },
        textAlign: "left",
      }}
    >
      {children}
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          width: "initial",
          position: "absolute",
          bottom: 0,
        }}
      >
        <p className="w-fit">created by Megan Swanby</p>

        <p className="w-fit">
          <a href="https://www.github.com/nycswan">source code</a>
        </p>
      </footer>
    </StyledMain>
  );
}
