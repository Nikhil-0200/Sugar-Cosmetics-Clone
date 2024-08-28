import { MdArrowForwardIos } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Radio, 
  RadioGroup,
  Stack
} from "@chakra-ui/react";

const Page = ({ bgImage, pageName }) => {
  return (
    <section className="border-2 border-blue-300 tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-sans">
      <div
        className="bg-center bg-cover h-[45vh] px-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <section className="px-10">
        <div className="flex items-center text-[14px] gap-3 py-5 ">
          <p className="text-gray-500">Home</p>
          <span>
            <MdArrowForwardIos />
          </span>
          <p className="font-bold">{pageName}</p>
        </div>

        <section className="w-full flex justify-between px-2">
          <div id="accDiv" className="w-[20%]">
            <div id="acc1">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem boxShadow='base' p='1' rounded='md' bg='white'>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        
                      >
                        <Text as='b'>Sort By:</Text> Popularity
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                 
                  <AccordionPanel pb={4}>
                  <Stack>
  <Radio size='md' name='1' colorScheme='red'>
    Price: High To Low
  </Radio>
  <Radio size='md' name='1' colorScheme='red'>
  Price: Low To High
  </Radio>
  <Radio size='md' name='1' colorScheme='red' >
  Rating: Low To High
  </Radio>
  <Radio size='md' name='1' colorScheme='red'>
  Rating: High To Low
  </Radio>
</Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div id="acc2"></div>
          </div>

          <div className="w-[70%] bg-black h-screen">
          hi</div>
        </section>
      </section>
    </section>
  );
};

export default Page;
