import { Text } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import Jeans from "./Jeans";
import Men from "./Men";
import New from "./New";
import ProductDetails from "./ProductDetails";
import Sale from "./Sale";
import Suits from "./Suits";
import Women from "./Women";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/new" element={<New />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route
          path="/community"
          element={<Community />}
        />
        <Route path="/labels" element={<Text>Welcome to Labels Page</Text>} />
        <Route path="*" element={<Text>ERROR 404: PageNotFound</Text>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
