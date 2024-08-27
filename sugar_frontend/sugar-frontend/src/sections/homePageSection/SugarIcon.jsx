import IconicSlider from "../../components/IconicSlider";
import { MbTitle } from "../../components/MbTitle";
import { Title } from "../../components/Title";

export const SugarIcon = () => {
  return (
    <div className="tablet:py-10 mobile:py-10">
      <div className="pt-5 mobile:block tablet:hidden">
        <MbTitle text={"sugar iconics in-focus"} />
      </div>

      <div className="pt-5 tablet:block mobile:hidden">
        <Title text={"sugar iconics in-focus"} />
      </div>

      <div>
        <IconicSlider />
      </div>
    </div>
  );
};
