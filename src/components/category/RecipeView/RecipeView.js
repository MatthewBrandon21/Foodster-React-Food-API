import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import "./RecipeView.css";
import IngredientsCard from "../IngredientsCard/IngredientsCard";
import NutrientsTabel from "../NutrientsTabel/NutrientsTabel";

function RecipeView({ location }) {
  console.log(location.state);
  const { recipe } = location.state;
  return (
    <div className="recipeView">
      <br />
      <br />
      <Typography align="center" variant="h4">
        {recipe.label}
      </Typography>
      <br />
      <div className="recipeView__one">
        {/* <Container> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={recipe.image}
              alt={recipe.label}
              className="recipeView__img"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" align="left" color="textPrimary">
              Servings : {recipe.yield}
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary">
              TotalWeight : {parseFloat(recipe.totalWeight.toFixed(2))} g
            </Typography>
            <Typography variant="h5" align="left" color="textPrimary">
              Calories : {parseFloat(recipe.calories.toFixed(2))} Kcal
            </Typography>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>

      <div className="recipeView__two">
        <Typography variant="h4" align="center" color="textPrimary">
          Ingredients
        </Typography>
        <br />
        <Container>
          <Grid container spacing={3}>
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <IngredientsCard ingredient={ingredient} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>

      <div className="recipeView__three">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography align="center" variant="h4">
                Nutrients
              </Typography>
              <NutrientsTabel data={recipe.totalNutrients} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography align="center" variant="h4">
                HealthLabels
              </Typography>
              <br/>
              {recipe.healthLabels &&
                recipe.healthLabels.map((label, index) => {
                  return (
                    <Typography align="center" variant="h5" key={index}>
                      * {label}
                    </Typography>
                  );
                })}
              <br />
                <br />
                <Typography align="center">
                <a
                  href={recipe.url}
                  target="_blank"
                  className="recipeView__recipeUrl"
                >
                  Full Instruction
                </a>
                </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default RecipeView;
