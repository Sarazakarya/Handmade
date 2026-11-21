import AboutHeader from "../AboutHeader/organisms/AboutHeader";
import AboutStorySection from "../AboutStory/organisms/AboutStorySection";
import { Features } from "../../Home/Feautre/components/organusms/Feauters";
import { Container } from "@/shared/components/atoms/Container";
import AboutMaker from "../AboutMaker/organisms/AboutMaker";
import { CozyLoops } from "../../Home/CozyLoops/components/organusms/CozyLoops";

const AboutSection = () => {
  return (
    <div className="flex flex-col ">
      <AboutHeader />
      <AboutStorySection />
      <Features bg="cozy-bg-light-brown" />
      <Container>
        <AboutMaker />
      </Container>
      <div className="bg-brown">
        <CozyLoops bg="cozy-bg-light-brown" />
      </div>
    </div>
  );
};

export default AboutSection;
