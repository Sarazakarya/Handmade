import { Slider } from "../molecule/Slider";
import { Features } from "../Feautre/components/organusms/Feauters";
import CategoriesSection from "../Categories/components/organusms/CategoriesSection";
import { CozyLoops } from "../CozyLoops/components/organusms/CozyLoops";
import NewLetterSection from "../Newletter/organisms/NewLetterSection";
import StorySection from "../Story/components/organusms/StorySection";
import PopularSection from "../Popular/organisms/PopularSection";

const HomeSections = () => {
  return (
    <div className="flex flex-col">
      <Slider />
      <Features bg="bg-white" />
      <CategoriesSection />
      <CozyLoops bg="bg-white" />
      <NewLetterSection />
      <PopularSection />
      <div className="cozy-bg-light-brown">
        <StorySection />
      </div>
    </div>
  );
};

export default HomeSections;
