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
          Hey there! Thanks for stopping by.
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
            Megan.{" "}
          </span>
        </Typography>
        <Typography>
          With a unique background in education, technology and the arts, I am
          passionate about creating beautiful, functional, and intuitive
          experiences online and in person. A jack of all trades, master of none
          is better than master of one!
        </Typography>

        <Typography variant="body1">
          After more than 6 years as a software engineer, finding solutions for
          complex real life problems using technology, I took on an additional
          role, as a caregiver for my dad who had developed memory issues. It
          was a challenging and rewarding experience. I have experience working
          on a variety of projects, from web and mobile apps to IoT. I love
          working with all types of teams. If it exists, I have probably worked
          with(in) the organizational structure -- startups to agencies and even
          non-profits! I most recently tried my hand as a startup founder after
          having a caretaker
        </Typography>
        <Typography variant="body1">
          I&apos;m a startup evangelist, technology nerd, former public school
          teacher, and non-profit manager. I&apos;m always up for a challenge,
          get in touch if you&apos;d like a great partner!
        </Typography>
      </ScrollStack>
    </ContentContainer>
  );
}
