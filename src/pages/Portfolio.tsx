import ContentContainer from "../components/ContentContainer";
import PageTitles from "../components/PageTitles";
import PortfolioDetails from "../components/PortfolioDetails";
import ScrollStack from "../components/ScrollStack";

export default function Portfolio() {
  return (
    <ContentContainer>
      <PageTitles title="My Portfolio" />
      <ScrollStack>
        <PortfolioDetails />
      </ScrollStack>
    </ContentContainer>
  );
}
