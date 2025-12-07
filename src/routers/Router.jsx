import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/MealDetails/MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/meals",
        element: <Meals />
      },
      {
        path: "/meals/meal-details",
        element: <MealDetails />
      }
    ]
  },
]);