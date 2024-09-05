import { MdArrowForwardIos } from "react-icons/md";
import { categoryLinks } from "../constants/index";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Radio,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "./Card";

const Page = ({ bgImage, pageName, fetchData, cat, setCat }) => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("")


  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchData(cat);
        let sortedData = result;

        if (sort === "price-desc") {
          sortedData = result.sort((a, b) => b.price - a.price);
        } else if (sort === "price-asc") {
          sortedData = result.sort((a, b) => a.price - b.price);
        } else if (sort === "rating-desc") {
          sortedData = result.sort((a, b) => b.ratings - a.ratings);
        } else if (sort === "rating-asc") {
          sortedData = result.sort((a, b) => a.ratings - b.ratings);
        }

        setData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error(`Error occurred: ${error}`);
        setError(true);
        setLoading(false);
      }
    }

    loadData();
  }, [cat, fetchData, sort]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data.</p>;
  }

  return (
    <section className="tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans">
      <div
        className="bg-center bg-cover tablet:h-[23vh] laptop:h-[45vh] px-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <section className="tablet:px-10 mobile:px-2">
        <div className="flex items-center text-[14px] gap-3 py-5 ">
          <p className="text-gray-500">Home</p>
          <span>
            <MdArrowForwardIos />
          </span>
          <p className="font-bold">{pageName}</p>
        </div>

        <section className="w-full flex tablet:justify-around laptop:justify-between px-2">
          <div id="accDiv" className="w-[23%] mobile:hidden tablet:block">
            <div id="acc1">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem boxShadow="base" p="1" rounded="md" bg="white">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text as="b">Sort By:</Text> Popularity
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4}>
                    <Stack>
                      <Radio size="md" colorScheme="red" name="sort" value="price-desc" onChange={(e)=> setSort(e.target.value)}>
                        Price: High To Low
                      </Radio>
                      <Radio size="md" colorScheme="red" name="sort" value="price-asc" onChange={(e)=> setSort(e.target.value)}>
                        Price: Low To High
                      </Radio>
                      <Radio size="md" colorScheme="red" name="sort" value="rating-asc" onChange={(e)=> setSort(e.target.value)}>
                        Rating: Low To High
                      </Radio>
                      <Radio size="md" colorScheme="red" name="sort" value="rating-desc" onChange={(e)=> setSort(e.target.value)}>
                        Rating: High To Low
                      </Radio>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div id="acc2" className="pt-5">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem boxShadow="base" p="1" rounded="md" bg="white">
                  <div className="border-b-2 flex justify-between px-4 py-4">
                    <Text as="b">Filters</Text>
                    <Text fontSize="sm" color="red">
                      Reset
                    </Text>
                  </div>
                  <h2>
                    <AccordionButton onClick={() => setActive(!active)}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text as="b">Category</Text>
                        {active === true ? (
                          <span className="text-[13px] text-red-800 pr-6">
                            Clear All
                          </span>
                        ) : (
                          ""
                        )}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4}>
                    <Stack display="flex" gap="20px" paddingY="10px">
                      {categoryLinks.map((ele, index) => (
                        <Checkbox
                          key={index}
                          size="md"
                          name="1"
                          colorScheme="red"
                          display="flex"
                          gap="10px"
                        >
                          <Text fontSize="xs">{ele.label}</Text>
                        </Checkbox>
                      ))}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="tablet:w-[70%] mobile:w-full grid laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-2 tablet:gap-5 laptop:gap-0 mobile:gap-6">
            {data.map((ele, index) => (
              <Card key={index} data={ele} />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Page;
