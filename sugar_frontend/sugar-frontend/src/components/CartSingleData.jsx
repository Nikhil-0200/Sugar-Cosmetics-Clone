import axios from "axios";
import { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { CartButton } from "./CartButton";
import { Cart } from "../pages/Cart";


const CartSingleData = ({ productId, quantity }) => {
  const [data, setData] = useState({});
  async function fetchData() {
    try {
      const res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/product/item?_id=${productId}`,
      });
      setData(res.data.item[0]);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className=" border-b-[0.5px] border-gray-500 flex justify-between py-3">
      <div className="flex gap-3">
        <div className="w-[60px] h-[80px] border-[1px] border-black rounded-xl overflow-hidden">
          {data.images && data.images.length > 0 && (
            <img className="w-full h-full object-contain" src={data.images[0].url} alt="" />
          )}
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-[16px]">{data.title}</h1>
          <h1 className="text-[20px] font-bold flex items-center"><span><MdCurrencyRupee /></span>{data.price}</h1>
        </div>
      </div>

      <div className="  flex flex-col justify-center">
        <CartButton quantity={quantity} productId={productId}/>
      </div>
    </section>
  );
};

export { CartSingleData };
