import { BestSeller } from "../sections/homePageSection/BestSeller";
import { FirstSlider } from "../sections/homePageSection/firstSlider";
import { NewLaunches } from "../sections/homePageSection/NewLaunches";
import { Refer } from "../sections/homePageSection/Refer";
import { SugarIcon } from "../sections/homePageSection/SugarIcon";

const HomePage = () => {
  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB">
      <div><FirstSlider /></div>
      <div><NewLaunches /></div>
      <div><BestSeller /></div>
      <div><SugarIcon/></div>
      <div><Refer/></div>
    </section>
  );
};

export { HomePage };
