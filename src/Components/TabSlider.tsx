import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "./Card";
import { useState } from "react";
import { Grid } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface obj {
  id: number;
  img: string;
  name: string;
  author: string;
  read: boolean;
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
  setFinished: React.Dispatch<React.SetStateAction<obj[]>>,
  setCurrentlyReading: React.Dispatch<React.SetStateAction<obj[]>>,
  currentlyReading: obj[],
  finished: obj[]
) {
  let arr: obj[];
  if (index === 0) {
    arr = currentlyReading;
  } else {
    arr = finished;
  }
  return (
    <TabPanel value={value} index={index}>
      <Grid container spacing={2}>
        {arr.map((book) => (
          <>
            <Grid item xs={12} sm={4}>
              <Card
                id={book.id}
                key={book.id}
                img={book.img}
                name={book.name}
                author={book.author}
                read={book.read}
                setFin={setFinished}
                setCurr={setCurrentlyReading}
                currentlyReading={currentlyReading}
                finished={finished}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </TabPanel>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const books = [
    {
      id: 0,
      img: "assets/book1.png",
      name: "Bring your Human to Work",
      author: "Erica Keswin",
      read: false,
    },
    {
      id: 1,
      img: "assets/book2.png",
      name: "Employee to Entrepreneur",
      author: "Steve Glaveski",
      read: false,
    },
    {
      id: 2,
      img: "assets/book3.png",
      name: "Doesn't Hurt to Ask",
      author: "Trey Gowdy",
      read: false,
    },
  ];

  const [currentlyReading, setCurrentlyReading] = useState(
    books.filter((book) => book.read === false)
  );
  const [finished, setFinished] = useState(
    books.filter((book) => book.read === true)
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Current Reading" {...a11yProps(0)} />
          <Tab label="Finished" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {[0, 1].map((ind) =>
        cardItem(
          value,
          ind,
          setFinished,
          setCurrentlyReading,
          currentlyReading,
          finished
        )
      )}
    </Box>
  );
}
