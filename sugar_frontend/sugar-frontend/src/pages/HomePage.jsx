import { BestSeller } from "../sections/homePageSection/BestSeller";
import { Club } from "../sections/homePageSection/Club";
import { Exclusive } from "../sections/homePageSection/Exclusive";
import { ExclusiveFestive } from "../sections/homePageSection/ExclusiveFestive";
import { FirstSlider } from "../sections/homePageSection/firstSlider";
import { Mousse } from "../sections/homePageSection/Mousse";
import { NewLaunches } from "../sections/homePageSection/NewLaunches";
import { Refer } from "../sections/homePageSection/Refer";
import { SkinCare } from "../sections/homePageSection/SkinCare";
import { SugarBeauty } from "../sections/homePageSection/SugarBeauty";
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
