import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/MealDetails/MealDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers"
import ManageRequests from "../pages/Dashboard/Admin/ManageRequests"
import PlatformStats from "../pages/Dashboard/Admin/PlatformStats"
import MyOrders from "../pages/Dashboard/User/MyOrders";
import MyReviews from "../pages/Dashboard/User/MyReviews";
import Favorites from "../pages/Dashboard/User/Favorites";
import FavoriteMeal from "../pages/Dashboard/User/FavoriteMeal";
import CreateMeal from "../pages/Dashboard/Chef/CreateMeal";
import MyMeals from "../pages/Dashboard/Chef/MyMeals";
import OrderPage from "../pages/Order/OrderPage";
import OrderRequests from "../pages/Dashboard/Chef/OrderRequests";
import FindProfile from "../pages/Dashboard/FindProfile";
import AuthProvider from "../context/AuthProvider";
import PrivateRoute from "./PrivateRoute";

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
        path: "/meals/:mealId",
        element: <PrivateRoute>
          <MealDetails />
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <FindProfile />
      },
      // Admin Panel
      {
        path: "manage-users",
        element: <ManageUsers />
      },
      {
        path: "manage-requests",
        element: <ManageRequests />
      },
      {
        path: "platform-statistics",
        element: <PlatformStats />
      },
      // Chef Panel
      {
        path: "create-meal",
        element: <CreateMeal />
      },
      {
        path: "my-meals",
        element: <MyMeals />
      },
      {
        path: "order-requests",
        element: <OrderRequests />
      },
      // User Panel
      {
        path: "my-orders",
        element: <MyOrders />
      },
      {
        path: "my-reviews",
        element: <MyReviews />
      },
      {
        path: "favorite-meals",
        element: <FavoriteMeal />
      }
    ]
  }
]);