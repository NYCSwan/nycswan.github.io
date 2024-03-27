import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import PortfolioDetails from "../components/PortfolioDetails";
import ScrollStack from "../components/ScrollStack";
import { portfolioData } from "../utils/portfolio";

export default function Portfolio() {
  return (
    <ContentContainer>
      <PageTitles title="My Portfolio" />
      <ScrollStack>
        {portfolioData.map((step, index) => (
          <PortfolioDetails key={step.label} data={step} index={index} />
        ))}
      </ScrollStack>
    </ContentContainer>
  );
}
