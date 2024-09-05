import axios from "axios";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { CartSingleData } from "../components/CartSingleData";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "../components/EmptyCart";
import { Footer } from "../components/Footer";

const Cart = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function fetchCartItem() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert(`User is not authenticated. Please log in.`);
        return;
      }

      const res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/cart/cartItems`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      setData(res.data.items[0].items);
    } catch (error) {
      const errorMessage = error.response?.data?.msg;
    }
  }

  useEffect(() => {
    fetchCartItem();
  }, []);

  function handleOrder() {
    async function emptyCart() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert(`User is not authenticated. Please log in.`);
          return;
        }

        const res = await axios({
          method: "post",
          url: `https://sugar-cosmetics-clone.onrender.com/cart/clearCart`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setData([]);
        alert("Order placed successfully!");
        navigate("/");
      } catch (error) {
        alert("There was an issue clearing the cart.");
      }
    }

    emptyCart();

  }

  return (
    <section className="tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans tablet:px-10 mobile:px-2">
      <div className="flex items-center text-[14px] gap-3 py-5">
        <p className="text-gray-500">Home</p>
        <span>
          <MdArrowForwardIos />
        </span>
        <p className="font-bold">Bag</p>
      </div>

      {data.length > 0 ? (
        <section className="flex flex-col gap-5">
        <div id="leftSide" className=" w-full font-sans">
          <h1 className="font-bold text-[18px] py-5">BAG SUMMARY</h1>

          <div className="border-[1px] border-black p-3 rounded-xl">
            {data.map((ele) => (
              <div key={ele.productId}>
                <CartSingleData
                  productId={ele.productId}
                  quantity={ele.quantity}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          id="rightSide"
          className="w-full font-sans text-white flex items-center align-middle justify-end"
        >
          <button
            className="bg-black text-[25px] font-bold px-10 py-2 w-[40%]"
            onClick={handleOrder}
          >
            PLACE ORDER
          </button>
        </div>
      </section>
      ) : (

        <EmptyCart/>
      )}

    </section>
  );
};

export { Cart };
