import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";

const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: (
          <MainLayouts />
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },   
      
    ],
  },

]);

export default CreateDRouter;
