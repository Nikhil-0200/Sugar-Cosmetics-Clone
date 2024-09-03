import axios from "axios";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { CartSingleData } from "../components/CartSingleData";


const Cart = () => {
  const [data, setData] = useState([]);

  async function fetchCartItem(){
    try {
      const token  = localStorage.getItem("token");

      if(!token){
        alert(`User is not authenticated. Please log in.`)
        return
      }

      const res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/cart/cartItems`,
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      console.log(res.data);
      // console.log(res.data.items[0].items);
      setData(res.data.items[0].items);
    } catch (error) {
      const errorMessage = error.response?.data?.msg
      console.log(errorMessage)
    }
  }

  useEffect(()=>{
    fetchCartItem()
  }, [])


  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans tablet:px-10 mobile:px-2">
    <div className="flex items-center text-[14px] gap-3 py-5 ">
          <p className="text-gray-500">Home</p>
          <span>
            <MdArrowForwardIos />
          </span>
          <p className="font-bold">Bag</p>
        </div>

        <section className="flex gap-5">
            <div id="leftSide" className="border-2 border-gray-500 w-1/2 font-sans">
            <h1 className="font-bold text-[18px]">BAG SUMMARY</h1>

            <div className="border-[1px] border-black p-3">
              {data.map((ele)=>(
                <div key={ele.productId} >
                  <CartSingleData productId={ele.productId}/>
                </div>
              ))}
            </div>
            </div>
            <div id="rightSide" className="border-2 border-red-500 w-1/2"></div>
        </section>
    </section>
  );
};

export { Cart };
