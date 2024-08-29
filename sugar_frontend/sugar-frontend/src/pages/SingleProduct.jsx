import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, HStack, VStack, Box, Text } from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { wishlistButton_icon } from "../assets/svg/icon";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function fetchProduct() {
    try {
      let res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/product/item?_id=${id}`,
      });
      setData(res.data.item);
      // console.log(res.data.item[0].title);
    } catch (error) {
      console.log(`Error occuured ${error}`);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const productData = data[0];
  const { title, price, ratings, images } = productData || {};

  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans">
      <div className="flex items-center text-[14px] gap-3 py-5 ">
        <p className="text-gray-500">Home</p>
        <span>
          <MdArrowForwardIos />
        </span>
        <p className="font-bold">{title}</p>
      </div>

      <Stack
        display="flex"
        flexDirection="row"
        alignContent="center"
        justifyContent="center"
        w="90%"
        border="2px"
        margin="auto"
        px={10}
      >
        <Stack bg="yellow" h="40px" w="40%">
          <Box>Images</Box>
        </Stack>

        <Stack h="40px" w="55%" fontSize="20px" border="2px" borderColor="red">
          <Text>{title}</Text>

          <Box>
            <Text as="b" display="flex" flexDirection="row" alignItems="center">
              <FaRupeeSign />
              {price}.00
            </Text>
          </Box>

          <Box bg="#F7F7F7" px="10" fontSize="14px" borderRadius="5px" py="3">
            <Text as="b">AVAILABLE OFFERS!</Text>
            <ul
              style={{ listStyleType: "disc" }}
              className=" text-[#75758A] py-3 flex flex-col gap-3"
            >
              <Box className="flex items-start">
                <span className="pt-1 pr-2 text-black">
                  <GoDotFill />
                </span>
                <li className="flex flex-col">
                  FREE Teal Trousseau Box Free on orders above 1499{" "}
                  <Link to="/" className="text-black font-bold underline">
                    Know More
                  </Link>
                </li>
              </Box>

              <Box className="flex items-start">
                <span className="pt-1 pr-2 text-black">
                  <GoDotFill />
                </span>
                <li className="flex flex-col">
                  Giva Silver Pendant complimentary on your SUGAR order worth
                  Rs.2499{" "}
                  <Link to="/" className="text-black font-bold underline">
                    Know More
                  </Link>
                </li>
              </Box>
            </ul>
          </Box>

          <div className="flex gap-3 justify-start w-full pb-2 px-1.5">
                <img
                  width={50}
                  src={wishlistButton_icon}
                  alt="wishlistButton_icon"
                />
                <button className="bg-black px-8 laptop:py-3 rounded-md text-white font-bold w-[40%] tablet:px-0 mobile:px-0">
                  ADD TO BAG
                </button>
              </div>
        </Stack>
      </Stack>
    </section>
  );
};

export { SingleProduct };
