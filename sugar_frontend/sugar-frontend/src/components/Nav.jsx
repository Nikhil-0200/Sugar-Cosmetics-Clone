import sugar_cos_image from "../assets/images/nav_images/sugar_cos_image.gif";
import { BiGift } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IconContext } from "react-icons";
import mobSugar_Image from "../assets/images/nav_images/mobSugar_Image.gif"
import { SideMenu } from "../pages/SideMenu";

import {
  cart_icon,
  discount_icon,
  mobCart_icon,
  mobSearch_icon,
  mobWishlist_icon,
  person_icon,
  search_icon,
  wishlist_icon,
} from "../assets/svg/icon";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

function handleNavBtn(){
  setMenuOpen(!menuOpen)  
}

  return (
    <section className="font-sans mobile: tablet:bg-black text-white mobile:z-10 mobile:fixed mobile:w-full top-0 bg-white pb-1">
      {menuOpen && <SideMenu setMenuClose={setMenuOpen} /> }
      
      <div className="flex justify-between text-navFont py-4 tablet:px-5 laptop:px-16 mobile:px-3 mobile:bg-white tablet:bg-black mobile:text-black tablet:text-white mobile:shadow-md">
        <div className="flex w-[70%] tablet:gap-[20px] laptop:gap-[70px]">
          <div className="laptop:w-[200px] tablet:flex-none mobile:flex mobile:gap-6">
          <IconContext.Provider
              value={{ size: 22, className: "global-class-name" }}
            >
            <button className="tablet:hidden" onClick={handleNavBtn}>
            <HiMenuAlt2 />
            </button>
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
              className="w-full bg-transparent px-1 pl-5 border-none focus:outline-none"
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
            <a href="/signIn"><p className="content-center">Login/Register</p></a>
          </span>

          <span className="flex tablet:w-1/3 justify-between gap-6">
            <IconContext.Provider
              value={{ size: 22, className: "global-class-name" }}
            >
              <a className="content-center tablet:hidden" href="/">
                <BiGift />
              </a>
            </IconContext.Provider>
            <a className="content-center mobile:hidden tablet:block" href="/wishList">
              <img src={wishlist_icon} alt="" />
            </a>
            <a className="content-center mobile:block tablet:hidden" href="/wishList">
              <img className="size-[22px]" src={mobWishlist_icon} alt="" />
            </a>
            <a className="content-center mobile:hidden tablet:block" href="/cart">
              <img src={cart_icon} alt="" />
            </a>
            <a className="content-center  mobile:block tablet:hidden" href="/cart">
              <img className="size-[22px]" src={mobCart_icon} alt="" />
            </a>
            <a
              className="content-center mobile:hidden laptop:flex"
              href="/offer"
            >
              <img  src={discount_icon} alt="" />
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

      <div className="flex tablet:hidden justify-center m-auto border-[1px] border-black bg-white rounded-lg mobile:px-3 w-11/12 h-8 my-[5px] z-0">
        <img className="scale-50" src={mobSearch_icon} alt="mobSearch_icon"/>
        <input type="text" placeholder="Lipsticks" className="w-full border-none focus:outline-none text-black"/>
      </div>

    </section>
  );
};

export { Nav };
