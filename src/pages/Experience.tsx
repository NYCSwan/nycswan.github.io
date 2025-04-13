import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import React from "react";
import ScrollStack from "../components/ScrollStack";
import professionalResume from "../utils/experience.json";

export default function Experience() {
  return (
    <ContentContainer>
      <PageTitles
        title={"My Experience"}
        subtitle="A balance artist in the face of 
          competing and conflicting needs and responsibilities"
      />
      <ScrollStack>
        <Typography variant="h3" align="center" gutterBottom>
          Insightful, Proactive, Outcome-obsessed.
        </Typography>

        <Grid container rowGap={5} columnGap={3} columnSpacing={2} pt={2}>
          {professionalResume.map(
            ({ dates, position, company, description }) => (
              <React.Fragment key={dates}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Typography
                    variant="body1"
                    fontFamily="Major Mono Display"
                    align="right"
                  >
                    {dates}
                  </Typography>
                  {!!company.length && (
                    <Typography
                      variant="body1"
                      color={"primary.main"}
                      align="right"
                    >
                      {company}
                    </Typography>
                  )}
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography
                    variant="h2"
                    color={"primary.light"}
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
