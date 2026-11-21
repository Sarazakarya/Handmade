import AboutImage from "../../AboutStory/molecule/AboutImage";
import { maker } from "@/assets/images/Images";
import AboutMakerDescription from "../molecule/AboutMakerDescription";

const AboutMaker = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-12 lg:py-16">
      <AboutImage reduce={false} image={maker} x={-120} />
      <AboutMakerDescription />
    </div>
  );
};

export default AboutMaker;
