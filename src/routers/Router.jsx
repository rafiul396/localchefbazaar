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
        element: <AdminProfile />
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />
      },
      {
        path: "/dashboard/manage-requests",
        element: <ManageRequests />
      },
      {
        path: "/dashboard/platform-statistics",
        element: <PlatformStats />
      }
    ]
  }
]);