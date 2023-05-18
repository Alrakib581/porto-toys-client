import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogpage from "../pages/Blogpage/Blogpage";
import AllToyPage from "../pages/AllToyPage/AllToyPage";

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
          path:'/alltoys',
          element: <AllToyPage></AllToyPage>
        },
        {
          path:'/blog',
          element:<Blogpage></Blogpage>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  }
])

export default router;