import { Box, Typography } from "@mui/material";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
import { activityBags } from "../utils/activityBags";
import ActivityCard from "../components/ActivityCard";

export default function Activities() {
  return (
    <ContentContainer>
      <ScrollStack>
        <PageTitles
          title="Activity & Calendar ideas"
          subtitle="Free printables, activity ideas, and calendar downloads for your
        community! "
        />
        <Typography variant="h5" textAlign="center" gutterBottom>
          You won't want to miss these resrouces that your seniors will love!
        </Typography>
        <Box
          sx={{
            padding: { xs: 0, md: "0 2rem 1rem 2rem" },
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
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
                <ActivityCard
                  key={title}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  documentLink={documentLink}
                />
              ),
            )}
          </div>
        </Box>
      </ScrollStack>
    </ContentContainer>
  );
}
