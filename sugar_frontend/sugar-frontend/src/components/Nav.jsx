import sugar_cos_image from "../assets/images/nav_images/sugar_cos_image.gif";
import { BiGift } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IconContext } from "react-icons";
import mobSugar_Image from "../assets/images/nav_images/mobSugar_Image.gif"

import {
  cart_icon,
  discount_icon,
  person_icon,
  search_icon,
  wishlist_icon,
} from "../assets/svg/icon";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <section className="font-sans bg-black text-white">
      <div className="flex justify-between text-navFont py-4 tablet:px-5 laptop:px-16">
        <div className="flex w-[70%] tablet:gap-[20px] laptop:gap-[70px]">
          <div className="laptop:w-[200px] tablet:flex-none mobile:flex mobile:flex-row border-2">
          <IconContext.Provider
              value={{ size: 22, style:{background:"red"}, className: "global-class-name" }}
            >
            <a className="tablet:hidden" href="/">
            <HiMenuAlt2 />
            </a>
            </IconContext.Provider>

            <a className="mobile:hidden tablet:flex tablet:w-[170px] laptop:flex laptop:w-[200px] justify-center items-center" href={"/"}>
              <img src={sugar_cos_image} alt="Sugar Cosmetic Logo" className="tablet:max-w-full tablet:max-h-full laptop:max-w-full laptop:max-h-full" />
            </a>
            <a className="tablet:hidden" href="/">
              <img className="mobile:w-[130px]" src={mobSugar_Image} alt="" />
            </a>
          </div>

          <div className="bg-[#212121] border-[1px] mobile:hidden tablet:flex rounded-md flex w-full h-[45px] justify-between">
            <input
              className="w-full bg-transparent px-1 pl-5"
              type="text"
              placeholder="Try Liquid Lipstick"
            />
            <span className="bg-white text-black tablet:px-4 laptop:px-7 rounded-r-sm content-center">
              <img src={search_icon} alt="search_icon" />
              <button>Search</button>
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-10 laptop:w-[300px]">
          <span className="flex gap-1 mobile:hidden tablet:flex">
            <img className="w-5" src={person_icon} alt="person_icon" />
            <p className="content-center">Login/Register</p>
          </span>

          <span className="flex tablet:w-1/3 justify-between border-2">
            <IconContext.Provider
              value={{ size: 22, className: "global-class-name" }}
            >
              <a className="content-center tablet:hidden" href="/">
                <BiGift />
              </a>
            </IconContext.Provider>
            <a className="content-center" href="/wishList">
              <img src={wishlist_icon} alt="" />
            </a>
            <a className="content-center" href="/cart">
              <img src={cart_icon} alt="" />
            </a>
            <a
              className="content-center mobile:hidden laptop:flex"
              href="/offer"
            >
              <img src={discount_icon} alt="" />
            </a>
          </span>
        </div>
      </div>

      <div>
        <ul className="flex justify-around bg-[#212121] py-4 text-[14px] mobile:hidden tablet:flex">
          {navLinks.map((links, index) => (
            <a key={index} href={links.href}>
              <li className="uppercase">{links.label}</li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Nav };
