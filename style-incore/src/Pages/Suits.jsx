import {
  Card,
  SimpleGrid,
  Stack,
  Text,
  Box,
  ListItem,
  List,
  Checkbox,
  Flex,
  Select,
  TagLabel,
  HStack,
  Heading,
  Container,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShopCategory from "../Components/ShopCategory";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Truncate from "react-truncate";
import CardItem from "../Components/CardItem";
import axios from "axios";
import NotFound from "../Components/NotFound";

const Suits = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await axios.get("http://localhost:8080/mens_data");
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const labelsData = [
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-dress-pants-2-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-sets-3-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-wedding-4-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-blazers-5-dt.jpg",
    },
  ];

  return loading ? (
    <h1>...Loading</h1>
  ) : err ? (
    <NotFound />
  ) : (
    <>
      <SimpleGrid columns={[1, 1, 2, 5]} gap={6}>
        <Card
          textAlign={"center"}
          justify={"center"}
          bg="#18181c"
          borderRadius={0}
        >
          <Text
            fontWeight={700}
            color="#ffffff"
            fontSize={"4xl"}
            letterSpacing={1}
          >
            Suit Shop
          </Text>
          <Text fontWeight={400} color="#ffffff" fontSize={"lg"}>
            Ready for every dress code.
          </Text>
        </Card>
        {labelsData.map((el) => (
          <ShopCategory img={el.img} name={el.name} />
        ))}
      </SimpleGrid>

      <Flex columns={[1, 1, 1, 2]}>
        <Box p={10} width="40%">
          {/* BREADCRUMB */}
          <Breadcrumb fontSize={12}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Men</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Truncate>Suits & Suit Separates</Truncate>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Full Suits</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <br />

          <Flex px={4} justify={"space-between"}>
            <Text fontWeight={600}>BROWSE BY:</Text>
          </Flex>
          {/* CATEGORY */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        CATEGORY
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List textAlign={"start"}>
                      <ListItem>All Suits & Suit Separates</ListItem>
                      <ListItem fontWeight={700}>Full Suits</ListItem>
                      <ListItem>Suit Jackets & Blazers</ListItem>
                      <ListItem>Dress Pants</ListItem>
                      <ListItem>Extra Slim Suit Separates</ListItem>
                      <ListItem>Slim Suit Separates</ListItem>
                      <ListItem>Classic Suit Separates</ListItem>
                      <ListItem>Icons: Modern Tech Suits</ListItem>
                      <ListItem>Mix & Match Suits</ListItem>
                      <ListItem>Wedding</ListItem>
                      <ListItem>Tuxedos</ListItem>
                    </List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Flex px={4} justify={"space-between"}>
            <Text fontWeight={600}>FILTER BY:</Text>
            <Text>Items</Text>
          </Flex>

          {/* FIT */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        FIT
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack pl={6} mt={1} spacing={1}>
                      <Checkbox>Classic</Checkbox>
                      <Checkbox>Extra Slim</Checkbox>
                      <Checkbox>Slim</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          {/* PATTERN */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        PATTERN
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack pl={6} mt={1} spacing={1}>
                      <Checkbox>Pattern</Checkbox>
                      <Checkbox>Solid</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          {/* COLOR */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        COLOR
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List textAlign={"start"}></List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>

        <Box p={10} width="100%">
          <Flex
            p={2}
            borderBottom={"1px solid grey"}
            justify={"space-between"}
            alignItems="center"
            mb={6}
          >
            <Heading size={"lg"}>MEN'S FULL SUITS</Heading>

            <Box display={"flex"}>
              <Text py={2} fontSize={"12px"}>
                Sort
              </Text>
              <Text p={2} fontSize={"12px"}>
                By:
              </Text>
              <Select placeholder="Relevance">
                <option value="option1">Price Low to High</option>
                <option value="option2">Price High to Low</option>
                <option value="option3">New Arrivals</option>
              </Select>
            </Box>
          </Flex>

          <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
            {data.map((el) => (
              <CardItem
                img={el.img}
                brand={el.brand}
                title={el.title}
                rating={el.rating}
                reviews={el.reviews}
                price={el.price}
                markedPrice={el.markedPrice}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Suits;