import { Box, Link, Stack, Typography } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import { styled } from "@mui/material/styles";
import ScrollStack from "../components/ScrollStack";
import { activityBags } from "../utils/activityBags";

const ResponsiveImage = styled("img")(({ theme }) => ({
  maxHeight: "200px",
  width: "fit-content",
  padding: "1rem",
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
      <ScrollStack>
        <Typography variant="h5">
          You won't want to miss these resrouces that your seniors will love!
        </Typography>
        <Box
          sx={{
            padding: { xs: 0, md: "0 2rem 1rem 2rem" },
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            1:1 Activity bags
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Turn everyday moments into opportunities for connection with these
            one-to-one activities that you can tailor to your needs. Each
            stand-alone activity fits into a single gallon bag and includes
            clear instructions, adaptations, and safety guidance. Built to be
            flexible and practical, while supporting the whole person. These
            grab-and-go activity bags offer an easy way to create calm,
            connection, and meaning—one person at a time.
          </Typography>
          <div>
            {activityBags.map(
              ({ title, description, imageUrl, documentLink }) => (
                <Stack
                  useFlexGap
                  sx={{
                    width: { sm: "100%", md: "60%" },
                    alignSelf: "center",
                    border: 3,
                    borderColor: "secondary.main",
                    marginTop: "1rem",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                    backgroundColor: "background.default",
                    boxShadow: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                  }}
                >
                  <ResponsiveImage src={imageUrl} />
                  <Typography variant="body1">{title}</Typography>
                  <Typography variant="body1">{description}</Typography>
                  <Link
                    underline="none"
                    target="_blank"
                    href={documentLink}
                    rel="noopener"
                  >
                    Learn More!
                  </Link>
                </Stack>
              ),
            )}
          </div>
        </Box>
      </ScrollStack>
    </ContentContainer>
  );
}
// physical, social, intellectual, spiritual, emotional, environmental/Occupational
