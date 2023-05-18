import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
} from "chart.js";
import BubbleChart from "../Charts/BubbleChart";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/data?page=1&limit=50")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const sectors = data?.data?.map((x) => x.sector);

  // PicChart
  const topics = data?.data?.map((x) => x.topic);
  const topicCounts = {};
  topics?.forEach((t) => {
    if (topicCounts[t]) topicCounts[t]++;
    else topicCounts[t] = 1;
  });
  const PieLabels = Object.keys(topicCounts);
  const PieValues = Object.values(topicCounts);

  //doughnut Chart
  const sectorCounts = {};
  sectors?.forEach((s) => {
    if (sectorCounts[s]) {
      sectorCounts[s]++;
    } else {
      sectorCounts[s] = 1;
    }
  });
  const labels = Object.keys(sectorCounts);
  const values = Object.values(sectorCounts);

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap="20px">
        <Box>
          <Heading m="20px" fontSize="25px" fontFamily="cursive">
            Intensity Of Different Sectors
          </Heading>
          <BarChart data={data} labels={sectors} />
        </Box>

        <Box>
          <Heading m="20px" fontSize="25px" fontFamily="cursive">
            Intensity vs Relevance vs Sector
          </Heading>
          <BubbleChart data={data} />
        </Box>

        <Box>
          <Heading m="20px" fontSize="25px" fontFamily="cursive">
            Different Topics
          </Heading>
          <PieChart labels={PieLabels} values={PieValues} />
        </Box>
        <Box>
          <Heading m="20px" fontSize="25px" fontFamily="cursive">
            Different Sectors
          </Heading>
          <DoughnutChart labels={labels} values={values} />
        </Box>
        <Box>
          <Heading m="20px" fontSize="25px" fontFamily="cursive">
            Relation b/w Intensity and Likelihood{" "}
          </Heading>
          <LineChart data={data} />
        </Box>
      </Box>
    </>
  );
};

export { Dashboard };
