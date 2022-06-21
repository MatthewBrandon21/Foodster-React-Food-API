import React from "react";
import { Card, CardHeader, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "3px",
  },
}));

function IngredientsCard({ ingredient }) {
  const classes = useStyles();
  return (
    <div className="ingredientsCard" style={{ maxHeight: "400" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={ingredient.image} alt={ingredient.text} />
            </Avatar>
          }
          title={ingredient.text}
          subheader={`Weight :${parseFloat(ingredient.weight.toFixed(2))} g`}
        />
      </Card>
    </div>
  );
}

export default IngredientsCard;
