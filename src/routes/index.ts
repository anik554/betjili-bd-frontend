import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import HotPage from "../pages/Hot";
import BetjiliGemsPage from "../pages/BetjiliGems";
import HeyvipCrashPage from "../pages/HeyvipCrash";
import SportsPage from "../pages/Sports";
import CricketPage from "../pages/Cricket";
import SebaPage from "../pages/Seba";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      { Component: HomePage, index: true },
      {
        Component: HotPage,
        path: "hot",
        children: [
          {
            Component: BetjiliGemsPage,
            path: "betjili-gems",
          },
          {
            Component: HeyvipCrashPage,
            path: "heyvip-crash",
          },
        ],
      },
      {
        Component: SportsPage,
        path: "sports",
        children: [
          {
            Component: CricketPage,
            path: "cricket",
          },
          {
            Component: SebaPage,
            path: "seba",
          },
        ],
      },
    ],
  },
  {
    Component: LoginPage,
    path: "/login-account",
  },
  {
    Component: SignupPage,
    path: "/create-account",
  },
]);
