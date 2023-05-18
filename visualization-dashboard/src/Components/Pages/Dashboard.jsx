import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/data?page=1&limit=100").then((res) => {
      console.log(res.data);
      setData(res.data);
    }).catch((error) => console.log(error))
  },[])


  return (
    <>
      <Box></Box>
    </>
  );
};

export { Dashboard };
