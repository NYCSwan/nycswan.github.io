import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import PortfolioDetails from "../components/PortfolioDetails";
import ScrollStack from "../components/ScrollStack";
import { portfolioData } from "../utils/portfolio";
import Box from "@mui/material/Box";

export default function Portfolio() {
  return (
    <ContentContainer>
      <PageTitles title="My Portfolio" subtitle="what I have built" />
      <ScrollStack>
        <Box sx={{ padding: "0 2rem" }}>
          <Typography variant="body1">
            Curiosity, problem-solving meaningful solutions, and a good cup of
            coffee have fueled my career so far. I have worn many hats -
            software developer, community organizer, operations manager. And
            along the way, I&apos;ve built creative tools, untangled messy
            systems, and connected people with the resources they need. I am
            passionate about creating beautiful, functional, and meaningful
            experiences online and in person.
          </Typography>
          <br />
          <Typography variant="body1">
            Now, I&apos;m bringing those same skills to senior care, creating
            meaningful experiences that make life easier, more engaging, and a
            little brighter for older adults. Whether online or in person,
            I&apos;m passionate about building experiences that are useful,
            beautiful, and leave people feeling seen, supported, and valued.
          </Typography>
        </Box>
        {portfolioData.map((step, index) => (
          <PortfolioDetails key={step.label} data={step} index={index} />
        ))}
      </ScrollStack>
    </ContentContainer>
  );
}
