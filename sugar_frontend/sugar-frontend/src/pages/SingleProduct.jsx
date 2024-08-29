import { useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";


const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function fetchProduct(){
    try {
        let res = await axios({
            method: "get",
            url: `https://sugar-cosmetics-clone.onrender.com/product/item?_id=${id}`
        })
        setData(res.data.item);
        // console.log(res.data.item[0].title);
        
        
    } catch (error) {
        console.log(`Error occuured ${error}`);
        
    }
  }


  useEffect(()=>{
    fetchProduct()
  }, [id])

  if(!data){
    return <p>Loading...</p>
  }

  const productData = data[0];
  const {title, price, ratings, images} = productData || {}

  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans">
      <div className="flex items-center text-[14px] gap-3 py-5 ">
        <p className="text-gray-500">Home</p>
        <span>
          <MdArrowForwardIos />
        </span>
        <p className="font-bold">{title}</p>
      </div>
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export { SingleProduct };
