import axios from "axios";


const AddToCart = (productId) => {
  

  async function addToCart(productId) {
    try {

        const token = localStorage.getItem("token");

        if(!token){
            alert(`User is not authenticated. Please log in.`);
            return
        }

      const res = await axios({
        method: "post",
        url: `https://sugar-cosmetics-clone.onrender.com/cart/addToCart/${productId}`,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
      });

      
      if (res.status === 200) {
        alert(res.data.msg);
      }

      
    } catch (error) {
      alert(error.response?.data.msg);
      console.log(`Error occurred while adding product to cart ${error}`);
    }
  }

  addToCart(productId)
};

export { AddToCart };
