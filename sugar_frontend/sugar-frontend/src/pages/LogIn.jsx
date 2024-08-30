import { useLocation } from "react-router-dom";
import { Container, Text, Box, Input, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SingInCab_icon, SingInCard_icon } from "../assets/svg/icon";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


const LogIn = () => {
  const { auth, Login, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  async function registerUser() {
    try {
      const res = await axios({
        method: "post",
        url: "https://sugar-cosmetics-clone.onrender.com/user/login",
        data: formState,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data?.token) {
        alert(`${res.data.msg}`);
        Login(res.data.token);
        console.log(res.data);
        navigate("/lips");
      }      
    } catch (error) {
      alert(error.response.data.msg)
      console.log(`Error occurred while login ${error}`);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    registerUser();

    setFormState({
      email: "",
      password: ""
    })
  }

  return (
    <section className="border-2  tablet:mt-marginSectionT mobile:mt-marginSectionTMob pb-paddingSectionB font-nikhil">
      <div className="shadow-3xl laptop:w-1/2 tablet:w-[80%] mobile:w-[90%] m-auto rounded-xl py-1 my-10 bg-signInBg bg-center">
        <Container maxW="xl" className="font-nikhil-regular" my={10}>
          <Box>
            <Flex flexDirection="column" gap={6}>
              <Box>
              <Text className="font-nikhil font-bold" fontSize="3xl">
                Login
              </Text>

              <Link to="/signin">
              <Text fontSize="15px" paddingY="14px" color="blue" textDecoration="underline">
                SignUp
              </Text>
              </Link>
              
              </Box>
              


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
                  border="1px"
                />
              </Box>

              <Box>
                <label className="font-nikhil font-semibold text-[14px]">
                  Password
                  <span>*</span>
                </label>
                <Input
                  rounded="0"
                  type="text"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  border="1px"
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
            Login
          </Button>
        </Container>
      </div>
    </section>
  );
};

export { LogIn };
