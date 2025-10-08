import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import SingleProfile from "./SingleProfile";
import MyProfile from "./MyProfile";
import ErrorPage from "./ErrorPage";

export const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/profiles/",
      element: <Profiles />,
      children: [
        {
          path: ":id",
          element: <SingleProfile />,
        },
        {
          path: "me",
          element: <MyProfile />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  
  ];