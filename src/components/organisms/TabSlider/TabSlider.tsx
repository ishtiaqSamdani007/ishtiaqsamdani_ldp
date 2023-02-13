import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import TableBodyComp from "../../molecules/TableBody/TableBody";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Crypto {
  id: number;
  title: {
    name: string;
    img: string;
  };
  price: string;
  change: string;
  MarketCap: string;
  watch: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function cardItem(
  value: number,
  index: number,
  setAllStocks: React.Dispatch<React.SetStateAction<Crypto[]>>,
  allStocks: Crypto[]
) {
  let arr: Crypto[];
  if (index === 0) {
    arr = allStocks;
  } else {
    arr = allStocks.filter((item) => item.watch === true);
  }

  const watchClick = (id: number) => {
    setAllStocks(
      allStocks.map((item) => {
        if (item.id === id) {
          item.watch = true;
        }
        return item;
      })
    );
  };

  const removeWatch = (id: number) => {
    setAllStocks(
      allStocks.map((item) => {
        if (item.id === id) {
          item.watch = false;
        }
        return item;
      })
    );

    console.table(allStocks);
  };
  return (
    <TabPanel value={value} index={index}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Watch</TableCell>
            </TableRow>
          </TableHead>
          <TableBodyComp
            arr={arr}
            watchClick={watchClick}
            removeWatch={removeWatch}
          />
        </Table>
      </TableContainer>
    </TabPanel>
  );
}

const StylisedBox1 = styled(Box)({
  sx: { width: "150px" },
});
const StylisedBox2 = styled(Box)({
  sx: { borderBottom: 1, borderColor: "divider" },
});
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const cryptos = [
    {
      id: 0,
      title: {
        name: "Bitcoin",
        img: "assets/bitcoin.png",
      },
      price: "$3,2885",
      change: "+1.2%",
      MarketCap: "$60,000,000",
      watch: false,
    },
    {
      id: 1,
      title: {
        name: "Etherium",
        img: "assets/eth.png",
      },
      price: "$3,2885",
      change: "-1.2%",
      MarketCap: "$60,000,000",
      watch: false,
    },
    {
      id: 2,
      title: {
        name: "Etherium 2",
        img: "assets/eth2.png",
      },
      price: "$3,2885",
      change: "+1.2%",
      MarketCap: "$60,000,000",
      watch: false,
    },
  ];

  const [allStocks, setAllStocks] = useState(
    cryptos.filter((crypto) => crypto.watch === false)
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StylisedBox1>
      <StylisedBox2>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Assets" {...a11yProps(0)} />
          <Tab label="Watch List" {...a11yProps(1)} />
        </Tabs>
      </StylisedBox2>
      {[0, 1].map((ind) => cardItem(value, ind, setAllStocks, allStocks))}
    </StylisedBox1>
  );
}
