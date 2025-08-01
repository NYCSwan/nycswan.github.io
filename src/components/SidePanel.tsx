import {
  BorderColor,
  Computer,
  ContactMail,
  GitHub,
  StarPurple500,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import coworker from "../assets/contact.jpg";
import headshot from "../assets/headshot.jpg";
import meImage from "../assets/me-hero.jpg";

const ResponsiveDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  overflowY: "scroll",
  overFlowX: "hidden",
  width: "auto",
  padding: 0,
  margin: 0,
  scrollbarWidth: "none",
  position: "relative",
  display: "flex",
  [theme.breakpoints.up("lg")]: {
    height: "100%",
    minWidth: "350px",
    maxWidth: "350px",
  },
  [theme.breakpoints.only("xl")]: {
    maxWidth: "450px",
    minWidth: "450px",
  },
  [theme.breakpoints.down("md")]: {
    overflowY: "visible",
  },
  [theme.breakpoints.only("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.only("xs")]: {
    minWidth: "150px",
    "> img": {
      maxHeight: "150px",
    },
  },
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
const ResponsiveImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "fit-content",
    height: "250px",
    alignSelf: "center",
    marginTop: "1rem",
    borderRadius: "25px",
  },
}));

const imageKey: Record<string, string> = {
  "0": headshot,
  "1": headshot,
  "2": coworker,
  "3": meImage,
  "4": meImage,
};
export default function SidePanel({ pageTopicId }: { pageTopicId: string }) {
  const image = imageKey[pageTopicId];
  return (
    <ResponsiveDiv>
      <Stack
        data-testid="side-panel"
        sx={{
          flexDirection: { xs: "column", sm: "row", md: "column" },
          maxWidth: { xs: "100%", md: "350px", xl: "450px" },
          minWidth: { xs: "100%", md: "350px", xl: "450px" },
          color: "grey.100",
          height: { xs: "auto", sm: "350px", md: "100%" },
          scrollbarWidth: "none",
        }}
      >
        <ResponsiveImage src={image} alt="" />
        <Stack
          flexDirection={"column"}
          sx={{
            padding: { xs: "0.5rem 1rem", md: "2rem 1rem" },
            height: { xs: "auto", md: "100%" },
            justifyContent: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", md: "inherit" },
          }}
        >
          <Typography
            color="secondary.light"
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: { md: "1.75rem", xl: "2rem" },
              fontFamily: "Major Mono Display",
              fontWeight: 700,
            }}
            textAlign="center"
            gutterBottom
          >
            General Info
          </Typography>
          <Grid container paddingTop={"1rem"}>
            <Grid size={1}>
              <BorderColor sx={{ height: "23%" }} />
              <StarPurple500 sx={{ height: "23%" }} />
              <ContactMail sx={{ height: "23%" }} />
              <Computer sx={{ height: "23%" }} />
            </Grid>
            <Grid size={3}>
              <Typography variant="h5" align="center" sx={{ height: "25%" }}>
                Name:
              </Typography>
              <Typography align="center" variant="h5" sx={{ height: "25%" }}>
                Loc:
              </Typography>
              <Typography align="center" variant="h5" sx={{ height: "25%" }}>
                Email:
              </Typography>
              <Typography variant="h5" align="center">
                CV:
              </Typography>
            </Grid>
            <Grid size={8} gap={1}>
              <Typography lineHeight={"40px"}>Megan Swanby</Typography>
              <Typography lineHeight={"40px"}>NC</Typography>
              <Typography lineHeight={"40px"}>
                megan.swanby@gmail.com
              </Typography>
              <Typography
                lineHeight={"40px"}
                component={"a"}
                href="https://www.canva.com/design/DAGhhabG-3Y/G1D_1BCTU5GXW9_fJ1K2dA/view?utm_content=DAGhhabG-3Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9e28bd51d"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "inherit",
                }}
              >
                My resume
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              height: "35px",
              paddingTop: 2,
              alignSelf: "center",
            }}
          >
            <IconButton href="https://www.github.com/nycswan" color="inherit">
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/megan-swanby"
            >
              <ContactMail />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </ResponsiveDiv>
  );
}
