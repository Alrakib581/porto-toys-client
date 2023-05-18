import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  }
])

export default router;