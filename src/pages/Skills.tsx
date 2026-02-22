import Typography from "@mui/material/Typography";
import Chart from "../components/Chart";
import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import ScrollStack from "../components/ScrollStack";
import { Stack } from "@mui/material";

export default function Skills() {
  return (
    <ContentContainer>
      <ScrollStack>
        <PageTitles
          title={"My Skills"}
          subtitle="Collaborative, Communicative, Creative,
            Curious, Quirky"
        />
        <Stack
          spacing={2}
          maxWidth={"80%"}
          sx={{ padding: { xs: 0, md: "0 1rem 0 2rem" } }}
        >
          <Typography variant="h5">
            1. Strategic Intelligence + Systems Thinking
          </Typography>
          <Typography variant="body1">
            I understand why systems work or fail. I see patterns across care,
            staffing, scheduling, budgets, compliance, and participant
            experience. I can redesign processes to improve outcomes and think
            several steps ahead to keep folks safe and well.
          </Typography>
          <Typography variant="h5">
            2. Breadth and Depth of Experience
          </Typography>
          <Typography variant="body1">
            I bring cross-disciplinary fluency: care work, operations,
            technology, program design, communication, and leadership. I can
            translate between clinicians, aides, administrators, families, and
            participants without losing meaning.
          </Typography>
          <Typography variant="h5">
            3. Cultural Humility and Relational Awareness
          </Typography>
          <Typography variant="body1">
            I am attentive, reflective, and eager to adapt my approach when
            working across race, class, culture, disability, and family systems
            in order to make participants feel seen, not managed and staff feel
            respected.
          </Typography>
          <Typography variant="h5">
            4. Advanced Communication & Literacy Skills
          </Typography>
          <Typography variant="body1">
            I write clearly, speak precisely, and adjust your tone for the
            audience — whether it’s documentation, care plans, families under
            stress or leadership. This reduces conflict, improves compliance,
            and builds trust across the organization.
          </Typography>
          <Typography variant="h5">5. Warmth Without Chaos</Typography>
          <Typography variant="body1">
            I am friendly, personable, and approachable without losing
            authority. People feel comfortable with me, and take me seriously.
          </Typography>
          <Typography variant="h5">6. Operational Competence </Typography>
          <Typography variant="body1">
            I can budget, plan, forecast, prioritize, and manage resources
            responsibly. I understand staffing ratios, supply management,
            scheduling realities, and regulatory pressure. I design programs
            that are sustainable, not just creative.
          </Typography>
          <Typography variant="h5">
            7. Staff Leadership That Builds Capacity
          </Typography>
          <Typography variant="body1">
            I don’t just supervise as a manager; I inspire and support my
            people. I notice strengths, set expectations clearly, give usable
            feedback, and help staff grow into better versions of themselves.
          </Typography>
          <Typography variant="h5">
            8. Ethical Centering of the Participant
          </Typography>
          <Typography variant="body1">
            I consistently orient decisions around dignity, autonomy, and
            meaning. Behavior is communication and “engagement” is more than
            compliance.
          </Typography>
          <Typography variant="h5">
            9. Comfort With Complexity and Ambiguity
          </Typography>
          <Typography variant="body1">
            I can flow with ambiguity, conflict, plans changing or incomplete
            information. I can hold emotional complexity, family dynamics, and
            systemic limitations and make sound decisions.
          </Typography>
          <Typography variant="h5">10. Builder’s Mindset</Typography>
          <Typography variant="body1">
            I don’t just maintain what exists; I improve and evolve it. I see
            programs as living systems that can be refined, expanded, or
            reimagined — whether through better assessments, smarter calendars,
            volunteer integration, or innovative engagement models.
          </Typography>
        </Stack>

        <Stack spacing={2} marginTop={"1rem"}>
          <Typography variant="h2">Tech Stack</Typography>
          <Typography variant="body1">
            Design and development go hand-in-hand. If technology is not made
            accessible through thoughtful user-focused design, it will never
            succeed. As a developer who specializes in the font end, I ensure
            each feature keeps the user in mind with clean, functional design.
          </Typography>
          <Typography variant="body1">
            I have extensive experience with accessability and responsive
            design.
          </Typography>
          <Chart />
        </Stack>
      </ScrollStack>
    </ContentContainer>
  );
}
