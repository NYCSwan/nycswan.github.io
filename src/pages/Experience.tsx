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
    description: `Most recently, as part of the tech leadership team, I planned, developed, executed, and maintained aspects of a software development life cycle for the frontend/UX with the goal to design and develop robust, scalable, and secure solutions, ensuring high performance and
availability`,
    stack: ["HTML/CSS", "React", "Typescript", "Redux", "highCharts"],
  },
  {
    dates: "Fall 2019 - Spring 2021",
    position: "Software Engineer I & II",
    company: "Brace.ai",
    description:
      "As one of two frontend engineers, I had a big part in digitizing an 80 year old federal process from 70+ printed pages to a short, dynamic, all-inclusive web-based form and user site. ",
    stack: ["HTML/CSS", "React", "Typescript", "Jest"],
  },
  {
    dates: "Fall 2017- 2019",
    position: "Fullstack Software Developer",
    company: "Aeroasis LLC",
    tags: [
      "Squarespace",
      "Mobile first",
      "Shopify",
      "Square integration",
      "HTML/CSS",
      "React",
      "React Native",
      "D3",
      "IOS",
      "Android",
      "IoT",
      "Nodejs",
      "AWS",
    ],
    description:
      "As the sole in-house software engineer, I managed and led in the development of all Aeroasis software endevours including rebuilding the public website, which resulted in a 200% increase in visitor traffic and improved company SEO. I created and maintained the company shop through Shopify, paypal, and Square. I developed the Aeroasis Grow App: an IoT connected mobile user app that maintained and controled an indoor garden ecosystem. In addition, I developed an education curricula and built a web platform for teachers and educators to access and interact with our lesson plans.",
  },
  {
    dates: "2017-2018",
    position: "Fullstack Software Developer",
    company: "Freelance",
    tags: [
      "React",
      "Mobile first",
      "Javascript es6",
      "Bootstrap",
      "Google Cloud",
      "SASS",
    ],
    description:
      "I crafted impactful and engaging online presences for a variety of small businesses. I translated client needs into effective web solutions. Throughout I managed the web application projects and development from conception through launch.",
  },
];
export default function Experience() {
  return (
    <ContentContainer>
      <PageTitles title={"My Experience"} subtitle="where I excelled" />
      <ScrollStack>
        <Typography variant="h3" align="center">
          Insightful, Proactive, Product-obsessed Software Development
        </Typography>

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
