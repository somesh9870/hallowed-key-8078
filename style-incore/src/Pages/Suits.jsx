import { Card, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ShopCategory from "../Components/ShopCategory";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Suits = () => {
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

  return (
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

      {/* <Breadcrumb fontSize={12}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Men</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Suits & Suit Separates</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Full Suits</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb> */}



    </>
  );
};

export default Suits;
