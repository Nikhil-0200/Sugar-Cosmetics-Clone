import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const CartButton = ({ quantity: initialQuantity, productId }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const updateQuantity = async (newQuantity) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `https://sugar-cosmetics-clone.onrender.com/cart/updateQuantity/${productId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
    }
  };

  const handleDelete = (id) =>{
    async function deleteItem(){
        
        try {
        const token = localStorage.getItem("token");

            const dlt = await axios({
                method: "delete",
                url: `https://sugar-cosmetics-clone.onrender.com/cart/deleteItem/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            alert(`Item removed from the cart`)
        } catch (error) {
            console.log(`Error occurred while deleting item from cart ${error}`);
        }
    }

    deleteItem()
  }

  return (
    <section className="flex items-center gap-5 w-full">
      <button className="text-gray-500" onClick={()=>handleDelete(productId)}>
        <RiDeleteBin6Line />
      </button>

      <div className="flex items-center text-[13px] border-[1px] border-gray-500 px-4 py-1.5 gap-3 rounded-lg">
        <button onClick={handleDecrease}><FaMinus /></button>
        <span className="text-[16px]">{quantity}</span>
        <button onClick={handleIncrease}><FaPlus /></button>
      </div>
    </section>
  );
};

export { CartButton };
  