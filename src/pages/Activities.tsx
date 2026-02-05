import { Link, Stack, Typography } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import { styled } from "@mui/material/styles";
import activity from "../assets/act4.png";
import ScrollStack from "../components/ScrollStack";

const ResponsiveImage = styled("img")(({ theme }) => ({
  maxHeight: "200px",
  width: "fit-content",
  [theme.breakpoints.down("sm")]: {
    height: "100px",
    alignSelf: "center",
    marginTop: "1rem",
    borderRadius: "25px",
  },
}));
export default function Activities() {
  return (
    <ContentContainer>
      <PageTitles
        title="Activity & Calendar ideas"
        subtitle="Free printables, activity ideas, and calendar downloads for your
        community! "
      />
      <Typography variant="h5">
        You won't want to miss these resrouces that your seniors will love!
      </Typography>
      <ScrollStack>
        <Typography variant="h4">1:1 Activity bags</Typography>
        <Typography variant="subtitle1">
          Turn everyday moments into opportunities for connection with these
          one-to-one activities that you can tailor to your needs. Each
          stand-alone activity fits into a single gallon bag and includes clear
          instructions, adaptations, and safety guidance. Built to be flexible
          and practical, while supporting the whole person.
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1">Title</Typography>
          <Typography variant="body1">Description</Typography>
          <ResponsiveImage src={activity} />
          <Link underline="none" target="_blank" href="#" rel="noopener">
            Open doc
          </Link>
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
