import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";
import mobSugar_Image from "../assets/images/nav_images/mobSugar_Image.gif"
import SwipeToSlide from "../components/SideNavSlider";



const SideMenu = ({setMenuClose}) => {

  return (
    <section className="mobile:block tablet:hidden fixed h-screen bg-white w-full text-black z-20 px-2 pt-6">
      <div className="laptop:w-[200px] tablet:flex-none mobile:flex mobile:gap-6 pb-10 px-4">
        <IconContext.Provider
          value={{ size: 32, style:{color:"black"}, className: "global-class-name" }}
        >
          <button className="tablet:hidden" onClick={()=>setMenuClose(false)}>
          <RxCross2 />
          </button>
        </IconContext.Provider>

        <a className="tablet:hidden" href="/">
          <img className="mobile:w-[130px]" src={mobSugar_Image} alt="" />
        </a>
      </div>

      <div>
        <p  className="uppercase px-4">browse by category</p>

        <div>
            <SwipeToSlide/>
        </div>
      </div>
    </section>
  );
};

export { SideMenu };
