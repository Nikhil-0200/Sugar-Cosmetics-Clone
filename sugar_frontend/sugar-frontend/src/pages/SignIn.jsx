import { useLocation } from "react-router-dom";
import { Container, Text, Box, Input, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SingInCab_icon, SingInCard_icon } from "../assets/svg/icon";
import axios from "axios";

const SignInTwo = () => {
  const [formState, setFormState] = useState({
    email: "",
    userName: "",
    fullName: "",
    password: "",
  });

  async function registerUser() {
    try {
      const res = await axios({
        method: "post",
        url: "https://sugar-cosmetics-clone.onrender.com/user/register",
        data: formState,
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(`User registered successfully`);
    } catch (error) {
      alert(`Error occurred while registering user`);
      console.log(`Error occurred while registering user ${error}`);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerUser();
  }

  return (
    <section className="border-2  tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-nikhil">
      <div className="shadow-3xl laptop:w-1/2 tablet:w-[80%] mobile:w-[90%] m-auto rounded-xl py-1 my-10">
        <Container maxW="xl" className="font-nikhil-regular" my={10}>
          <Box>
            <Flex flexDirection="column" gap={6}>
              <Text className="font-nikhil font-bold" fontSize="3xl">
                Create Account
              </Text>

              <Box className="flex flex-col gap-3">
                <Text className="flex gap-3 items-center">
                  <span>
                    <img src={SingInCard_icon} alt="cardIcon" />
                  </span>
                  Check out faster
                </Text>
                <Text className="flex gap-3 items-center">
                  <span>
                    <img src={SingInCab_icon} alt="cabIcon" />
                  </span>
                  Track orders easily
                </Text>
              </Box>

              <Text>
                <span>*</span>Required
              </Text>
              <Box>
                <label className="font-nikhil font-semibold text-[14px]">
                  Email
                </label>
                <Input
                  rounded="0"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <label className="font-nikhil font-semibold text-[14px]">
                  User name <span>*</span>
                </label>
                <Input
                  rounded="0"
                  type="text"
                  name="userName"
                  value={formState.userName}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <label className="font-nikhil font-semibold text-[14px]">
                  Full name <span>*</span>
                </label>
                <Input
                  rounded="0"
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <label className="font-nikhil font-semibold text-[14px]">
                  Create password
                  <span>*</span>
                </label>
                <Input
                  rounded="0"
                  type="text"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Box>
              <Text className="text-sm w-[95%]">
                By creating an account, you agree to our{" "}
                <span className="text-[#6275c9] underline">Privacy Policy</span>{" "}
                and{" "}
                <span className="text-[#6275c9] underline">
                  {" "}
                  Terms & Conditions
                </span>
                .
              </Text>
            </Flex>
          </Box>
          <Button
            className="w-[100%] mt-5 p-5"
            rounded={0}
            color="white"
            backgroundColor="#2563eb"
            fontSize="12px"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </Container>
      </div>
    </section>
  );
};

export { SignInTwo };
