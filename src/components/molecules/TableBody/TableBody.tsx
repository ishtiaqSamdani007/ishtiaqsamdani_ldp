import React from "react";
import {
  TableBody as TableBodyMui,
  TableCell,
  TableRow,
  Stack,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import Typography from "../../atoms/Typography/Typography";
interface TableBodyProps {
  arr: {
    id: number;
    title: {
      name: string;
      img: string;
    };
    price: string;
    change: string;
    MarketCap: string;
    watch: boolean;
  }[];
  watchClick: (id: number) => void;
  removeWatch: (id: number) => void;
}

function TableBody({ arr, watchClick, removeWatch }: TableBodyProps) {
  return (
    <TableBodyMui>
      {arr.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <Stack direction="row" alignItems="center" spacing={1}>
              <img height={30} src={row.title.img} alt="cypto-img" />
              <Typography>{row.title.name}</Typography>
            </Stack>
          </TableCell>
          <TableCell align="right">{row.price}</TableCell>
          {row.change[0] === "+" ? (
            <TableCell align="right" style={{ color: "green" }}>
              {row.change}
            </TableCell>
          ) : (
            <TableCell align="right" style={{ color: "red" }}>
              {row.change}
            </TableCell>
          )}
          <TableCell align="right">{row.MarketCap}</TableCell>
          <TableCell align="right">
            {row.watch ? (
              <StarIcon
                color="primary"
                cursor="pointer"
                onClick={() => removeWatch(row.id)}
              />
            ) : (
              <StarOutlineIcon
                color="primary"
                cursor="pointer"
                onClick={() => watchClick(row.id)}
              />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBodyMui>
  );
}

export default TableBody;
