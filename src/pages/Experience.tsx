import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import React from "react";
import ScrollStack from "../components/ScrollStack";
const professionalResume = [
  {
    dates: "Spring 2021 - Fall 2023",
    position: "Senior Software Engineer & Front-End Tech Leadership",
    company: "Brace.ai",
    description: `Brace.ai is a company that specializes in creating software for the healthcare industry. I was responsible for developing and maintaining the front-end of the application. I worked closely with the design team to create a seamless user experience.`,
  },
  {
    dates: "Fall 2019 - Spring 2021",
    position: "Software Engineer I & II",
    company: "Brace.ai",
    description: "I did...",
  },
  {
    dates: "Fall 2017- 2019",
    position: "Fullstack Software Developer",
    company: "Aeroasis LLC",
    description: "I did...",
  },
  {
    dates: "2017-2018",
    position: "Fullstack Software Developer",
    company: "Freelance",
    description: "I did...",
  },
];
export default function Experience() {
  return (
    <ContentContainer>
      <PageTitles title={"My Experience"} subtitle="where I excelled" />
      <ScrollStack>
        <Box pb={4}>
          <Typography variant="h3" align="center">
            Insightful, Proactive, Product-obsessed Software Development
          </Typography>
        </Box>
        <Grid container rowGap={5} columnGap={3} columnSpacing={2}>
          {professionalResume.map(
            ({ dates, position, company, description }) => (
              <React.Fragment key={dates}>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    fontFamily="Major Mono Display"
                    align="right"
                  >
                    {dates}
                  </Typography>
                  <Typography variant="body1" align="right">
                    {company}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography
                    variant="h2"
                    variantMapping={{ h2: "p" }}
                    gutterBottom
                  >
                    {position}
                  </Typography>
                  <Typography variant="body1">{description}</Typography>
                </Grid>
              </React.Fragment>
            )
          )}
        </Grid>
      </ScrollStack>
    </ContentContainer>
  );
}
