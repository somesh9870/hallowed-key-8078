import React from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ShopCategory = ({ img, name }) => {
  return (
    <>
      <RouterLink to={`/${name.toLowerCase()}`}>
        <Card color="#000000">
          <Image
            src={img}
            alt="naruto"
            objectFit="contain"
            //   height={"500px"}
            mb={3}
          />
          <Text fontWeight={700} textDecoration="underline" letterSpacing={1}>
            {name}
          </Text>
        </Card>
      </RouterLink>
    </>
  );
};

export default ShopCategory;
