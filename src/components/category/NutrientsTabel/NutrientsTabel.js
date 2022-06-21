import React from "react";
import "./NutrientsTabel.css";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    maxHeight: 400,
    overflow: "scroll",
  },
});

function NutrientsTabel({ data }) {
  const classes = useStyles();

  return (
    <div className="nutrientsTabel" className={classes.table}>
      {Object.entries(data).map((nutrient, index) => {
        const { label, quantity, unit } = nutrient[1];
        return (
          <TableRow key={index}>
            <TableCell align="left">{label}</TableCell>
            <TableCell align="right">
              {parseFloat(quantity.toFixed(2))}
            </TableCell>
            <TableCell align="right">{unit}</TableCell>
          </TableRow>
        );
      })}
    </div>
  );
}

export default NutrientsTabel;
