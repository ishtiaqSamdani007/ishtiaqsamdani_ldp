import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "./utils";
import CardComponent from "./CardComponent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
interface IPost {
  id: number;
  title: string;
  body: string;
}
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const getMyPostData = async () => {
    try {
      const res = await axios.get("/posts");
      console.log(res.data);
      setMyData(res.data);
    } catch (error: any) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <br />
      <br />
      <header>
        <h2 style={{ textAlign: "center" }}>INFO</h2>
      </header>
      <Container fixed>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {myData.map((item: IPost, index: number) => {
            return (
              <>
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={4}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardComponent
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
