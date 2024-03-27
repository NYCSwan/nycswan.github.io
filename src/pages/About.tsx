import Typography from "@mui/material/Typography";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";

export default function About() {
  return (
    <ContentContainer>
      <PageTitles
        title={"My Bio"}
        subtitle="Full Stack Developer. Tinkerer. Thinkerer."
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
            Megan{" "}
          </span>
          a fullstack developer with a unique background in education and the
          arts. I am passion about creating beautiful, functional, and intuitive
          user experiences and products.
        </Typography>
        <Typography variant="body1">
          I&apos;ve been a dev for over 6 years because I love finding solutions
          for complex real life problems using technology. I have experience
          working on a variety of projects, from web and mobile apps to IoT. I
          love working with all types of teams. If it exists, I have probably
          work with(in) the organizational structure -- startups to agencies and
          even non-profits.
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
