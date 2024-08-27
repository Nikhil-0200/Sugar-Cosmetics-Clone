import { price_icon, star_icon, wishlistButton_icon } from "../assets/svg/icon";
import { MdCurrencyRupee } from "react-icons/md";


export const Card = ({data}) => {

  return (
    <section className="flex justify-center items-center content-center py-10 pb-20 font-sans">
      <div className=" mobile:w-[170px] tablet:w-[210px] laptop:w-[245px] border-2 laptop:h-[450px] rounded-2xl overflow-hidden bg-white text-black flex flex-col justify-between">      
        <div className="h-[60%] rounded-xl bg-cover bg-center overflow-hidden">
          <img
            src={data.images[0].url}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around items-center h-[50%]">
          <h1 className=" tablet:text-[14px] tablet:w-[80%] tablet:text-center laptop:text-[13px] pt-3 px-2">{data.title}</h1>

          <div className="flex flex-col items-center pt-5 gap-2 pb-3">
            <p className="laptop:text-[13px] tablet:text-[16px] text-[#757575]">{data.category}</p>
            <div className="flex gap-2 tablet:text-[20px]">
              <img src={price_icon} alt="price_icon" />
              <p className="font-bold flex items-center"><span><MdCurrencyRupee /></span>
              {data.price}</p>
            </div>
            <div className="flex items-center laptop:text-[13px] tablet:text-[16px] text-[#757575]">
              <img src={star_icon} alt="star_icon" />
              <span className="pr-1 font-bold">{data.ratings}</span>(5)
            </div>
          </div>

          <div className="flex gap-3.5 justify-around w-full pb-2 px-1.5">
            <img
              width={50}
              src={wishlistButton_icon}
              alt="wishlistButton_icon"
            />
            <button className="bg-black px-8 laptop:py-3 rounded-md text-white font-bold w-[70%] text-[14px] tablet:px-0 mobile:px-0">
              SELECT ITEM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// https://cdn.shopify.com/s/files/1/0906/2558/files/Mousse-Muse-Lip-Cream-01-Backlit-Nude.jpg?v=1719884217
