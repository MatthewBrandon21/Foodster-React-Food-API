import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Category from "./components/category/Category/Category";
import RecipesGrid from "./components/category/RecipesGrid/RecipesGrid";
import RecipeView from "./components/category/RecipeView/RecipeView";
import aboutus from "./components/aboutus/aboutus";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/recipes/:type" component={RecipesGrid} />
            <Route exact path="/viewRecipe" component={RecipeView} />
            <Route exact path="/aboutus" component={aboutus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
