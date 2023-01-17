import { Text } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Text>Welcome to Home Page</Text>} />
        <Route path="/women" element={<Text>Welcome to Women Page</Text>} />
        <Route path="/men" element={<Text>Welcome to Men Page</Text>} />
        <Route path="/jeans" element={<Text>Welcome to Jeans Page</Text>} />
        <Route path="/new" element={<Text>Welcome to New Page</Text>} />
        <Route path="/sale" element={<Text>Welcome to Sale Page</Text>} />
        <Route
          path="/community"
          element={<Text>Welcome to Community Page</Text>}
        />
        <Route path="/labels" element={<Text>Welcome to Labels Page</Text>} />
        <Route path="*" element={<Text>ERROR 404: PageNotFound</Text>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
 