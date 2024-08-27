import axios from "axios";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { useState, useEffect } from "react";
import { Loading, Error } from "../../components/Loading";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const BestSeller = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1)
  const [totalPages, setTotalPages] = useState(0);
  const [limits, setLimits] = useState(4);

  const updateLimits = () => {
    if (window.innerWidth >= 1024) { // Matches laptop screen size
      setLimits(4);
    } else if (window.innerWidth >= 640) { // Matches tablet screen size
      setLimits(3);
    } else { // For mobile screen size
      setLimits(2);
    }
  };
  
  useEffect(() => {
    // Call the function to set the initial limit
    updateLimits();
    // Add event listener to update limits on window resize
    window.addEventListener("resize", updateLimits);

    // Cleanup the event listener on component unmount
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
      console.log(res.data.item);
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
    <div className="border-2 border-black bg-homePageBG1 bg-cover bg-top text-white">
        {loading && <Loading/>}
        <div className="mt-5">
      <Title text={"Bestsellers"} />
        </div>
      <div className="flex justify-between laptop:px-16 tablet:px-6 mobile:px-2">
        <button style={{scale:"2.5", paddingRight: "7px"}} onClick={handlePrev}>
          <IoIosArrowDropleftCircle />
        </button>
        {data.map((ele) => (
          <Card data={ele} />
        ))}
        <button style={{scale:"2.5", paddingLeft: "7px"}} onClick={handleNext}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};
