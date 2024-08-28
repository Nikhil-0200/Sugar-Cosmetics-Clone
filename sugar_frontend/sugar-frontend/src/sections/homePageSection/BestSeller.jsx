import axios from "axios";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { useState, useEffect } from "react";
import { Loading, Error } from "../../components/Loading";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MbTitle } from "../../components/MbTitle";

export const BestSeller = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1)
  const [totalPages, setTotalPages] = useState(0);
  const [limits, setLimits] = useState(4);

  const updateLimits = () => {
    if (window.innerWidth >= 1024) { 
      setLimits(4);
    } else if (window.innerWidth >= 640) { 
      setLimits(3);
    } else { 
      setLimits(2);
    }
  };
  
  useEffect(() => {
    updateLimits();
    window.addEventListener("resize", updateLimits);

    return () => {
      window.removeEventListener("resize", updateLimits);
    };
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/product/item?page=${pages}&limit=${limits}`,
      });
      setData(res.data.item);
      console.log(res.data);
      setTotalPages(res.data.totalPages)
      
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(`Error occurred ${error}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, [pages, limits]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handlePrev(){
    setPages((prevState) =>{
        return prevState === 1 ? totalPages : prevState - 1
    })
    console.log(pages);
    
  }

  function handleNext(){
    setPages((prevState) => {
        return prevState === totalPages ? 1 : prevState + 1
    })
    console.log(pages);
    
  }

  return (
    <div className=" bg-homePageBG1 bg-cover bg-top text-white w-full mobile:rounded-bl-3xl tablet:rounded-none tablet:pb-10 tablet:pt-5">
    <div className="mobile:block py-4 pb-2 rounded-bl-3xl bg-white text-black tablet:hidden">
        <MbTitle text={"Bestsellers"}/>
      </div>

        {loading && <Loading/>}
        <div className="mt-5 mobile:hidden tablet:block">
      <Title text={"Bestsellers"} />
        </div>

      <div className="flex justify-between mobile:justify-center mobile:gap-3 laptop:px-16 tablet:px-6 mobile:px-8 mobile:relative py-10">
        <button className="mobile:absolute tablet:static mobile:top-1/2 mobile:left-4" style={{scale:"2.5", paddingRight: "7px", color:"aqua"}} onClick={handlePrev}>
          <IoIosArrowDropleftCircle />
        </button>
        {data.map((ele) => (
          <Card data={ele} />
        ))}
        <button className="mobile:absolute tablet:static mobile:top-1/2 mobile:right-4 " style={{scale:"2.5", paddingLeft: "7px", color:"aqua"}} onClick={handleNext}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
    );
};
