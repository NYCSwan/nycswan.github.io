import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";

export default function About() {
  return (
    <ContentContainer>
      <PageTitles
        title={"My Bio"}
        subtitle=" A Tinkerer. A Thinkerer. A Maker. A Doer. A Creator."
      />
      <ScrollStack>
        <Typography variant="body1">
          Hey there! Thanks for stopping by!
        </Typography>
        <Typography>
          I am
          <span
            style={{
              fontFamily: "Major Mono Display",
              color: "inherit",
            }}
          >
            {" "}
            Megan{" "}
          </span>
        </Typography>
        <Typography variant="body1">
          After more than 7 years as a software engineer, finding solutions for
          complex real life problems using technology, I took on an additional
          role as a caregiver for my dad who developed dementia. It was a
          challenging and rewarding experience that transformed my professional
          path. I learned to navigate the complexities of caregiving, and wanted
          to apply my expertise to help others in similar situations.
        </Typography>
        <Typography variant="body1">
          I have experience working on a variety of projects, from websites to
          curriculum development. I love working with all types of teams. If it
          exists, I have probably worked with(in) the organizational structure
          -- from startups to non-profits!
        </Typography>
        <Typography variant="body1">
          Currently, I&apos;m channeling that expertise into creating engaging,
          enriching experiences for older adults while continuing to develop
          software projects that improve accessibility and quality of life for
          seniors and adults with memory issues.
        </Typography>
        <Typography variant="body1">
          I thrive at the intersection of technology and human connection, using
          strategic thinking and hands-on collaboration to support both
          individuals and organizations. Whether through program development,
          technology solutions, or direct engagement, I&apos;m committed to
          fostering environments where seniors feel valued, supported, and
          empowered.
        </Typography>
      </ScrollStack>
    </ContentContainer>
  );
}
