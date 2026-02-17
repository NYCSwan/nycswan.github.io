import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <ContentContainer>
      <PageTitles
        title={"My Bio"}
        subtitle=" A Tinkerer. A Thinkerer. A Maker. A Doer. A Creator."
      />
      <ScrollStack>
        <Typography variant="body1">
          Hey there! Thanks for stopping by! I'm
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
        <Stack width={{ xs: "inherit", sm: "70%" }} alignItems={"center"}>
          <Typography variant="body1" gutterBottom>
            Having recently completed my activity director certification, I am
            looking for the next opportunity to become an indispensible partner
            for clients and coworkers; channeling my expertise into creating
            engaging, enriching experiences for seniors! I also enjoy developing
            software projects that improve accessibility and quality of life for
            seniors and adults with memory issues.
          </Typography>
          <Typography variant="body1" gutterBottom>
            With my varied background in program design, community engagement,
            and person-directed care, I am eager to bring my energy, creativity,
            and leadership to your to seniors across Day Services, Independent
            Living, Assisted Living, and Memory Care. Throughout my career, I
            have designed and led inclusive programs that balance social,
            physical, cognitive, and reflective enrichment. Whether coordinating
            dozens of volunteers for multi-day community events, creating
            differentiated activities for individuals with disabilities, or
            overseeing daily operations with full regulatory compliance, I have
            consistently delivered programs that engage participants and
            strengthen community bonds. My experience supervising staff,
            managing budgets, and building strong family and community
            partnerships has prepared me to thrive as both a leader and
            collaborator on your management team.
          </Typography>
          <Typography variant="h5" gutterBottom>
            How did I get here you might be asking?
          </Typography>
          <Typography variant="body1" gutterBottom>
            After more than 7 years as a software engineer, finding solutions
            for complex real life problems using technology, I took on an
            additional role as a caregiver for my dad who developed dementia. It
            was a challenging and rewarding experience that transformed my
            professional path. I learned to navigate the complexities of
            caregiving, and wanted to apply my expertise to help others in
            similar situations.
          </Typography>
          <Typography variant="body1">
            I have experience working on a variety of projects, from managing
            teams to programs for people with dementia. I love working with all
            types of teams. If it exists, I have probably worked with(in) the
            organizational structure -- from startups to non-profits! I thrive
            at the intersection of technology and human connection, using
            strategic thinking and hands-on collaboration to support both
            individuals and organizations. Whether through program development,
            technology solutions, or direct engagement, I&apos;m committed to
            fostering environments where seniors feel valued, supported, and
            empowered.
          </Typography>
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
