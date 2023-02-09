import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./utils";
import CardComponent from "./components/molecules/Card/CardComponent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "./components/atoms/Typography/Index";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/system";

interface IPost {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = myData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <br />
      <br />
      <Typography variant="h3" align="center">
        My Posts
      </Typography>
      <Container fixed>
        {isError && <h1 style={{ textAlign: "center" }}>{isError}</h1>}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {currentPosts.map((item: IPost, index: number) => {
            return (
              <>
                <Grid key={item.id} item xs={12} sm={6} md={4}>
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          marginTop={2}
        >
          <Pagination
            count={Math.ceil(myData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </Container>
    </>
  );
}

export default App;
