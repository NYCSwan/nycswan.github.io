import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import React from "react";
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
      <Box pb={4}>
        <Typography variant="h3">
          Insightful, proactive, product-obsessed software development.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {professionalResume.map(({ dates, position, company, description }) => (
          <React.Fragment key={dates}>
            <Grid item xs={6} md={3}>
              <Typography variant="h5" fontFamily="Major Mono Display">
                {dates}
              </Typography>
              <Typography variant="h2" variantMapping={{ h2: "p" }}>
                {position}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              {company}
            </Grid>
            <Grid item xs={12} md={6}>
              {description}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </ContentContainer>
  );
}
