const categoryBreakfast = {
  data: "breakfast",
  image:
    "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg",
  category: "Breakfast",
};

const categoryLunch = {
  data: "lunch",
  image:
    "https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg",
  category: "Lunch",
};

const categoryDinner = {
  data: "dinner",
  image:
    "https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg",
  category: "Dinner",
};

const categoryDesserts = {
  data: "desserts",
  image:
    "https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg",
  category: "Desserts",
};

const categoryVegeterian = {
  data: "vegeterian",
  image:
    "https://cdn.pixabay.com/photo/2016/06/18/22/52/salad-1465818_960_720.jpg",
  category: "Vegeterian",
};

const categorySugarConscious = {
  data: "low-sugar",
  image:
    "https://cdn.pixabay.com/photo/2017/11/11/20/59/food-2940463_960_720.jpg",
  category: "Sugar-conscious",
};

const categoryAlcoholFree = {
  data: "alcohol-free",
  image:
    "https://cdn.pixabay.com/photo/2019/09/03/18/57/photography-4450049_960_720.jpg",
  category: "Alcohol Free",
};

const categoryDairyFree = {
  data: "dairy-free",
  image:
    "https://cdn.pixabay.com/photo/2020/04/28/11/25/milk-5104022_960_720.jpg",
  category: "Dairy Free",
};
const categoryNoOilAdded = {
  data: "no-oil-added",
  image:
    "https://cdn.pixabay.com/photo/2017/09/22/16/25/pizza-2776208_960_720.jpg",
  category: "No oil added",
};

const categoryBalanced = {
  data: "balanced",
  image:
    "https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461_960_720.jpg",
  category: "Balanced ",
};

const categoryHighProtein = {
  data: "high-protein",
  image:
    "https://images.pexels.com/photos/135755/pexels-photo-135755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  category: "High-Protein ",
};

const categoryLowCarb = {
  data: "low-carb",
  image:
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  category: "Low-Carb",
};

const categoryLowFat = {
  data: "low-fat",
  image:
    "https://cdn.pixabay.com/photo/2017/05/17/17/48/picnic-2321445_960_720.jpg",
  category: "Low-Fat ",
};

const categoryHighFiber = {
  data: "high-fiber",
  image:
    "https://images.pexels.com/photos/4397754/pexels-photo-4397754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  category: "High-Fiber",
};

const categoryLowSodium = {
  data: "low-sodium",
  image:
    "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  category: "Low-Sodium",
};

export const categories = [
  {
    title: "Meals for the day",
    key: "mealtype",
    items: [categoryBreakfast, categoryLunch, categoryDinner, categoryDesserts],
  },
  {
    title: "Health Based",
    key: "healthLabels",
    items: [
      categoryVegeterian,
      categorySugarConscious,
      categoryAlcoholFree,
      categoryDairyFree,
      categoryNoOilAdded,
    ],
  },
  {
    title: "Diet Meals",
    key: "dietLabels",
    items: [
      categoryBalanced,
      categoryHighFiber,
      categoryHighProtein,
      categoryLowCarb,
      categoryLowFat,
      categoryLowSodium,
    ],
  },
];
