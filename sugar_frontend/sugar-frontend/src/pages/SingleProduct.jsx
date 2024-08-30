import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Stack,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  extendTheme,
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { star_icon, wishlistButton_icon } from "../assets/svg/icon";


const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [bigImage, setBigImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

  async function fetchProduct() {
    try {
      let res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/product/item?_id=${id}`,
      });
      setData(res.data.item);
      setBigImage(res.data.item[0].images[0].url);
      setSelectedImage(res.data.item[0].images[0].url); // Initialize the selected image
    } catch (error) {
      console.log(`Error occurred: ${error}`);
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

  const handleClick = (imageUrl) => {
    setBigImage(imageUrl);
    setSelectedImage(imageUrl); // Update the selected image
  };

  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans">
      <div className="flex items-center text-[14px] gap-3 py-5 px-8 mb-4">
        <p className="text-gray-500">Home</p>
        <span>
          <MdArrowForwardIos />
        </span>
        <p className="font-bold">{title}</p>
      </div>

      <Stack
        display="flex"
        flexDirection={{xl:"row", md:"row", base:"column"}}
        alignContent="center"
        justifyContent="center"
        w="90%"
        margin="auto"
        px={5}
        h="auto"
        position="relative"
        className="shadow-3xl rounded-xl"
        py={4}
        gap={{xl:"7", base:"0"}}
      >
        <Stack
          w={{xl:"40%", md:"40%", base:"100%"}}
          direction="row"
          flexDirection={{xl:"row-reverse", md:"row-reverse", base:"column"}}
          padding={2}
          gap={{xl:"8%", md:"3%"}}
          position={{xl:"sticky", md:"sticky", base:"relative"}}
          top={{xl:"20%", md:"15%"}}
          alignSelf="flex-start"
          maxH="80vh"
          overflow="auto"
        >
          <Box className="border-[1px] border-gray-300 w-full h-[350px] overflow-hidden p-2 rounded-lg">
            <img className="w-full h-full object-fill" src={bigImage} alt="BigImage" />
          </Box>

          <Box className="flex tablet:flex-col mobile:flex-row gap-3 py-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`border-[1px] ${
                  selectedImage === image.url
                    ? "border-black"
                    : "border-gray-300"
                } w-[80px] h-[80px] rounded-xl overflow-hidden cursor-pointer`}
                onClick={() => handleClick(image.url)}
              >
                <img
                  className="w-full h-full object-cover"
                  src={image.url}
                  alt={`image${index}`}
                />
              </div>
            ))}
          </Box>

          <hr />
        </Stack>

        <Stack
          w={{xl:"55%", md:"55%", base:"100%"}}
          fontSize="20px"
          direction="row"
          flexDirection="column"
          gap={10}
          py={2}
        >
          <Text fontWeight={{base:"600"}}>{title}</Text>
          <Box className="flex flex-col gap-2">
            <div className="flex items-center laptop:text-[13px] tablet:text-[16px] text-black border-[1px] border-black w-fit rounded-md px-2 py-1 gap-2">
              <img src={star_icon} alt="star_icon" />
              <p>
                <span className="pr-1 font-bold">{ratings}</span>(5)
              </p>
            </div>

            <Text as="b" display="flex" flexDirection="row" alignItems="center">
              <FaRupeeSign />
              {price}.00
            </Text>
          </Box>

          <Box>
            
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
            <button className="bg-black px-8 laptop:py-3 rounded-md text-white font-bold laptop:w-[40%] tablet:w-[60%] mobile:w-[100%] tablet:px-0 mobile:px-0">
              ADD TO BAG
            </button>
          </div>

          //
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem borderY="1px" borderStyle="dashed" py={2} borderColor="gray">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="14px"
                    fontWeight="700"
                    flex="1"
                    textAlign="left"
                  >
                    DESCRIPTION
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderY="1px" borderStyle="dashed" py={2} borderColor="gray">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="14px"
                    fontWeight="700"
                    flex="1"
                    textAlign="left"
                  >
                    INGREDIENTS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderY="1px" borderStyle="dashed" py={2} borderColor="gray">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="14px"
                    fontWeight="700"
                    flex="1"
                    textAlign="left"
                  >
                    FREQUENTLY ASKED QUESTIONS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderY="1px" borderStyle="dashed" py={2} borderColor="gray">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="14px"
                    fontWeight="700"
                    flex="1"
                    textAlign="left"
                  >
                    ADDITIONAL DETAILS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize="14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
        </Stack>
      </Stack>



    </section>
  );
};

export { SingleProduct };
