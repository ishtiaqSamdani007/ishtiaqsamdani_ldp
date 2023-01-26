import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
interface IPost {
  id: number;
  title: string;
  body: string;
}

const StyledCard = styled(Card)({
  maxWidth: 345,
});

function CardComponent({ id, title, body }: IPost) {
  return (
    <>
      <StyledCard>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.slice(0, 10)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </>
  );
}

export default CardComponent;
