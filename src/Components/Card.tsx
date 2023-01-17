import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
interface obj {
  id: number;
  img: string;
  name: string;
  author: string;
  read: boolean;
}
interface Props {
  id: number;
  img: string;
  name: string;
  author: string;
  read: boolean;
  setFin: React.Dispatch<React.SetStateAction<obj[]>>;
  setCurr: React.Dispatch<React.SetStateAction<obj[]>>;
  currentlyReading: obj[];
  finished: obj[];
}

export default function MultiActionAreaCard({
  id,
  img,
  name,
  author,
  read,
  setFin,
  setCurr,
  currentlyReading,
  finished,
}: Props) {
  const finish = () => {
    setFin([...finished, { id, img, name, author, read: true }]);
    setCurr(currentlyReading.filter((book) => book.name !== name));
  };

  const reading = () => {
    setCurr([...currentlyReading, { id, img, name, author, read: false }]);
    setFin(finished.filter((book) => book.name !== name));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={img} alt="book_image" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            fontWeight={700}
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
        <div className="card-status">
          <div className="time">
            <img
              src="assets/clock.png"
              alt="time-icon"
              className="card-status-image"
            />
            <span className="text">13-minute read time</span>
          </div>
          <div className="reacts">
            <img
              src="assets/reacts.png"
              alt="reacts-icon"
              className="card-status-image"
            />
            <span className="text">13-minute read time</span>
          </div>
        </div>
      </CardActionArea>
      <CardActions className="center">
        {read ? (
          <Button size="small" color="primary" onClick={reading}>
            read again
          </Button>
        ) : (
          <Button size="small" color="primary" onClick={finish}>
            Finished
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
