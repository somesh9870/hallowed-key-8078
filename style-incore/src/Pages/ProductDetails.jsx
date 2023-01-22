import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import React from "react";

const ProductDetails = () => {
  return (
    <>
      <Heading py={10} px={28} textAlign={'start'} fontWeight={600} size={'lg'} >Olive Brown Extra Slim Sateen Stretch Suit</Heading>
      <Flex>
        {/* <Box>
          <Image
            src=""
            alt={"error"}
          />
        </Box> */}
        <Box>
          <Container maxW={"7xl"}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 1, md: 4 }}
            >
              <Flex display={['none','none','none','block']}>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={
                    "https://images.express.com/is/image/expressfashion/0039_04353871_2885_c100?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
                  }
                  objectFit={"contain"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Flex>
              <Stack  spacing={{ base: 6, md: 10 }}>
                <Stack p={2} boxShadow={'xl'} spacing={{ base: 4, sm: 6 }} direction={"column"}>
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("yellow.500", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Product Details
                    </Text>
                    <Flex>
                      <Image
                        src={
                          "https://images.express.com/is/image/expressfashion/0039_04353871_2885_c100?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
                        }
                        alt="naruto"
                        objectFit="contain"
                        height={"200px"}
                        // mb={3}
                      />
                      <List ml={3} textAlign={"start"} spacing={2}>
                        <ListItem>product name</ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Bracelet:
                          </Text>{" "}
                          leather strap
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Case:
                          </Text>{" "}
                          Steel
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Case diameter:
                          </Text>{" "}
                          42 mm
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Dial color:
                          </Text>{" "}
                          Black
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Crystal:
                          </Text>{" "}
                          Domed, scratch‑resistant sapphire crystal with
                          anti‑reflective treatment inside
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Water resistance:
                          </Text>{" "}
                          5 bar (50 metres / 167 feet){" "}
                        </ListItem>
                      </List>
                    </Flex>
                  </Box>
                </Stack>

                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Add to cart
                </Button>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <MdLocalShipping />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>

    </>
  );
};

export default ProductDetails;
