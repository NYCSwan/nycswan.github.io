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
          My career has always been driven by curiosity, problem-solving, and a
          desire to make a meaningful impact. With a background in software
          development, community outreach, and organizational management,
          I&apos;ve built solutions, streamlined operations, and connected
          people with the resources they need. But when I became my
          father&apos;s caregiver, my perspective on work and purpose shifted.
          That experience reinforced my strengths in adaptability, empathy, and
          creative problem-solving — skills that naturally align with senior
          care. I am passionate about creating beautiful, functional, and
          meaningful experiences online and in person.
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
          Now, I&apos;m channeling that expertise into creating engaging,
          enriching experiences for older adults while continuing to develop
          software projects that improve accessibility and quality of life. I
          thrive at the intersection of technology and human connection, using
          strategic thinking and hands-on collaboration to support both
          individuals and organizations. Whether through program development,
          technology solutions, or direct engagement, I&apos;m committed to
          fostering environments where seniors feel valued, supported, and
          empowered.
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
