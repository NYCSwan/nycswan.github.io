import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import meImage from "../assets/me-hero.jpg";
import {
  BorderColor,
  StarPurple500,
  ContactMail,
  Computer,
  GitHub,
} from "@mui/icons-material";
import headshot from "../assets/headshot.jpg";
import coworker from "../assets/contact.jpg";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

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
  [theme.breakpoints.up("md")]: {
    height: "100%",
    minWidth: "350px",
    maxWidth: "350px",
  },
  [theme.breakpoints.only("xl")]: {
    maxWidth: "450px",
    minWidth: "450px",
  },
  [theme.breakpoints.only("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.only("xs")]: {
    minWidth: "150px",
    overflowY: "visible",
    "> img": {
      maxHeight: "150px",
    },
  },
  "&::-webkit-scrollbar": {
    display: "none",
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
        <img src={image} alt="" />
        <Stack
          flexDirection={"column"}
          sx={{
            padding: "2rem 1rem",
            height: { xs: "auto", md: "100%" },
            justifyContent: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", md: "inherit" },
          }}
        >
          <Typography
            color="secondary.light"
            sx={{
              fontSize: { xs: "1.75rem", xl: "2rem" },
              fontFamily: "Major Mono Display",
              fontWeight: 700,
            }}
            textAlign={{ xs: "center", sm: "left" }}
            gutterBottom
          >
            General Info
          </Typography>
          <Grid container paddingTop={"1rem"}>
            <Grid size={1}>
              <BorderColor sx={{ height: "35px" }} />
              <StarPurple500 sx={{ height: "35px" }} />
              <ContactMail sx={{ height: "35px" }} />
              <Computer sx={{ height: "35px" }} />
            </Grid>
            <Grid size={3}>
              <Typography variant="h5" align="center">
                Name:
              </Typography>
              <Typography align="center" variant="h5">
                Loc:
              </Typography>
              <Typography align="center" variant="h5">
                Email:
              </Typography>
              <Typography variant="h5" align="center">
                CV:
              </Typography>
            </Grid>
            <Grid size={8} gap={1}>
              <Typography lineHeight={"40px"}>Megan Swanby</Typography>
              <Typography lineHeight={"40px"}>Washington, DC</Typography>
              <Typography lineHeight={"40px"}>
                megan.swanby@gmail.com
              </Typography>
              <Typography
                lineHeight={"40px"}
                component={"a"}
                href="https://www.canva.com/design/DAFuP4YLEL8/jVnXC53RyIhKeiIvr37B6g/view?utm_content=DAFuP4YLEL8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
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
          <Box sx={{ height: "35px", paddingTop: 2, alignSelf: "center" }}>
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
